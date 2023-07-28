import React from "react";
import './Main.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../../pages/Home/Home"));
const Catalog = React.lazy(() => import("../../pages/Catalog/Catalog"));

const Main = (props) => {
	return (
			<Routes>
				<Route index element={<Home />} />
			</Routes>
	)
}

export default Main;