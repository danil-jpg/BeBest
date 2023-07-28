import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
		<header className="header">
			{/* <Link to="" className="header__logo-link">
				<img src="" alt="" className="header__logo" />
			</Link> */}

			<ul className="header__list">
				<li className="header__item">
					<Link to="" className="header__link"></Link>
				</li>
			</ul> 

			<div className="user-header">

			</div>

			<div className="lang-select">
				
			</div>
		</header>
	)
}

export default Header;