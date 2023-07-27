import React from "react";
import './Main.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../../pages/Home/Home"));
const Catalog = React.lazy(() => import("../../pages/Catalog/Catalog"));

const Main = (props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='catalog' element={<Catalog />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Main;