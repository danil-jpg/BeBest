import React from 'react';
import './ItemForum.scss';
import icon from '../../../../assets/icons/forum-item.svg';
import { Link } from 'react-router-dom';

const ItemForum = ({
    title,
    author,
    lastAuthor,
    amount,
    create,
    update,
    head = false,
    topic = false,
    id,
}) => {

    const getLink = topic ? `/forum/view/${id}` : `/forum/topic/${id}`;

    return (
        <div
            className={`item-forum ${head ? 'item-forum_head' : ''} ${topic ? 'item-forum_topic' : ''
                }`}
        >
            {
                head
                    ? <p className='item-forum__title'>{title}</p>
                    : <div className='item-forum__name'>
                        <div className='item-forum__icon-wrap'>
                            <img
                                className='item-forum__icon'
                                src={icon}
                                alt='icon'
                            />
                        </div>

                        <div className='item-forum__name-topic'>
                            <Link to={getLink} className='item-forum__title'>{title}</Link>
                            {
                                author
                                    ? <p className='item-forum__author'>
                                        от{' '}
                                        <Link className='item-forum__author-link'>
                                            {author}
                                        </Link>
                                    </p>
                                    : <></>
                            }
                        </div>
                    </div>
            }

            <div className='item-forum__info'>
                <div className='item-forum__info-wrap'>
                    <div className='item-forum__amount-topic'>{amount}</div>
                    <div className='item-forum__update'>
                        <p className='item-forum__update-text'>{update}</p>
                        {
                            topic && !head
                                ? 
                                    <p className='item-forum__author'>
                                        от{' '}
                                        <Link className='item-forum__author-link'>
                                            {lastAuthor}
                                        </Link>
                                    </p>
                                : <></>
                        }
                    </div>
                </div>
                {
                    topic && head || topic
                        ? <div className='item-forum__info-create'>{create}</div>
                        : <></>
                }
            </div>
        </div>
    );
};

export default ItemForum;
