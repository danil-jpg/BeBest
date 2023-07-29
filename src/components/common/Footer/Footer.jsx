import React from 'react';
import './Footer.scss';
import ContainerMain from '../ContainerMain/ContainerMain';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SocialFooter from './SocialFooter/SocialFooter';

const Footer = (props) => {
    let data = useSelector((state) => state.footerSlice);

    return (
        <footer className='footer'>
            <ContainerMain style={{ maxWidth: '1186px' }}>
                <div className='footer__body'>
                    <div className='footer__left'>
                        <Link to='/' className='footer__logo-wrap'>
                            <img
                                src={data.logo}
                                alt='logo'
                                className='footer__logo'
                            />
                        </Link>
                        <SocialFooter />
                        <p className='footer__copy'>{data.copyright}</p>
                    </div>
                    <div className='footer__right'>
                        <div className='footer__list-field'>
                            <h2 className='footer__title-list'>
                                {data.titleInfo}
                            </h2>
                            <div className='footer__list'>
                                {data?.infoList.map((el) => (
                                    <Link to={el.to} key={el.id} className='footer__link'>
                                        {el.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='footer__list-field'>
                            <h2 className='footer__title-list'>
                                {data.titleCategories}
                            </h2>
                            <div className='footer__list'>
                                {data?.categories.map((el) => (
                                    <Link to={el.to} key={el.id} className='footer__link'>
                                        {el.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerMain>
        </footer>
    );
};

export default Footer;
