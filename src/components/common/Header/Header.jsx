import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import UserMenuHeader from './UserMenuHeader/UserMenuHeader';
import { useSelector } from 'react-redux';
import ContainerMain from '../ContainerMain/ContainerMain';

const Header = ({ home = false }) => {
    let data = useSelector((state) => state.headerSlice);

	

    return (
        <header className={home ? 'header header_home' : 'header'}>
            <ContainerMain>
                <div className='header__body'>
                    <Link to='/' className='header__logo-wrap'>
                        <img
                            src={data.logo}
                            alt='logo'
                            className='header__logo'
                        />
                    </Link>
                    <ul className='header__list'>
                        {data?.list.map((el) => (
                            <li className='header__item' key={el.id}>
                                <Link to={el.to} className='header__link'>
                                    {el.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <UserMenuHeader />
                </div>
            </ContainerMain>
        </header>
    );
};

export default Header;
