import React from 'react';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';

const SocialFooter = (props) => {

    return (
        <div className='footer__social'>
            <div className='footer__social-list'>
                <a href='#' className='footer__social-link'>
                    <IconRenderer
                        id='facebook'
                        className='footer__social-icon icon-fb'
                    />
                </a>
                <a href='#' className='footer__social-link'>
                    <IconRenderer
                        id='instagram'
                        className='footer__social-icon icon-instagram'
                    />
                </a>
                <a href='#' className='footer__social-link'>
                    <IconRenderer
                        id='twitter'
                        className='footer__social-icon icon-twitter'
                    />
                </a>
            </div>
            <div className='footer__social-list'>
                <a href='#' className='footer__social-link'>
                    <IconRenderer id='whatsup' className='footer__social-icon icon-whatsup' />
                </a>
                <a href='#' className='footer__social-link'>
                    <IconRenderer id='telegram' className='footer__social-icon icon-tg' />
                </a>
                <a href='#' className='footer__social-link'>
                    <IconRenderer id='viber' className='footer__social-icon icon-viber' />
                </a>
            </div>
        </div>
    );
};

export default SocialFooter;
