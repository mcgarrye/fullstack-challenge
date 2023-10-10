import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Order from "./Order";
import Pizzas from "./Pizzas";
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/pizzas" element={<Pizzas />} />
			<Route path="/order/:id" element={<Order />}/>
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
