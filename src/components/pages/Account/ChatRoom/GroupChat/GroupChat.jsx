import React, { useEffect, useState } from 'react';
import '../ChatRoom.scss';

export const GroupChat = ({
    elem,
    imageSrc,
    name,
    currentMessages,
    setCurrentMessages,
    setCurrentGroupID,
    setTitleChat
}) => {
    const [lastMess, setLastMess] = useState('Нет сообщений');

    const handleClick = () => {
        setCurrentMessages([...elem.messages]);
        setCurrentGroupID(elem.id);
        setTitleChat(name);
    }

    const getFirstEl = (el) => el[0];

    const getLastMess = (elem, current) => {
        let elemAuthor = getFirstEl(elem).author.username;
        let elemMess = getFirstEl(elem).message;
        let elemID = getFirstEl(elem).id;
        let currentAuthor = getFirstEl(current).author.username;
        let currentMess = getFirstEl(current).message;
        let currentID = getFirstEl(current).id;

        let isTrue =
            elemAuthor === currentAuthor
            && elemID === currentID
            && currentMess === elemMess;
        
        if (isTrue) {
            setLastMess(current[current.length - 1].message)
        }
    }

    useEffect(() => {
        if (elem.messages.length && currentMessages && currentMessages.length) {
            getLastMess(elem.messages, currentMessages);
        }

        // if(elem)

        if (elem.messages.length && !currentMessages) {
            setLastMess(elem.messages[elem.messages.length - 1].message);
        }


    }, [currentMessages])



    return (
        <li className="group-item" onClick={handleClick}>
            <div className='group-item__image-wrap'>
                <img className='group-item__image' src={imageSrc} alt='image' />
            </div>
            <div className='group-item__body'>
                <p className='group-item__name'>{name}</p>
                <p className='group-item__text'>{lastMess}</p>
            </div>
        </li>
    )
}
