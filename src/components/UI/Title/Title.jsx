import React from "react";
import './Title.scss';

const Title = ({ children, style = {} }) => {

	return (
		<h1
			style={style}
			className="title">
			{children}
		</h1>
	)
}

export default Title;