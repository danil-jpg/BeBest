import React, { useEffect, useState } from 'react';
import '../ChatRoom.scss';

export const GroupChat = ({
    elem,
    imageSrc,
    name,
    currentMessages,
    setCurrentMessages,
    setCurrentGroupID
}) => {
    const [lastMess, setLastMess] = useState('Нет сообщений');

    const handleClick = () => {
        setCurrentMessages([...elem.messages]);
        setCurrentGroupID(elem.id)
    }

    useEffect(() => {
        // if (currentMessages) {
        //     let lastIndex = currentMessages?.length - 1;
        //     setLastMess(currentMessages[lastIndex].message)
        // }
        if (elem.messages.length && !currentMessages) {
            setLastMess(elem.messages[elem.messages.length - 1].message);
        }

        console.log(elem.messages)

        // if (currentMessages) {
        //     let lastIndex = currentMessages?.length - 1;
        //     setLastMess(currentMessages[lastIndex].message);
        // }
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
