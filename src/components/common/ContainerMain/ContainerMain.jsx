import React from "react";
import './ContainerMain.scss';

const ContainerMain = ({ children }) => {
	return (
		<div className="container">
			{children}
		</div>
	)
}

export default ContainerMain;