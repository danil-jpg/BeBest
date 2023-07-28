import React from 'react';
import './Footer.scss';
import ContainerMain from '../ContainerMain/ContainerMain';

const Footer = (props) => {
    return (
        <footer className='footer'>
			<ContainerMain style={{ maxWidth: '1186px' }}>
				<div className="footer__body">

				</div>
			</ContainerMain>
        </footer>
    );
};

export default Footer;
