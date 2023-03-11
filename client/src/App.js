import React from "react";

import AddItem from "./components/AddItem/index"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<AddItem />
			<Footer />
		</div>
	);
}
