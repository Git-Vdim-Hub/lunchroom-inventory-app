import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItem from "./pages/AddItem";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Inventory from "./pages/Inventory";
import Tabs from "./components/Tabs"
import Navbar from "./components/Navbar";
import Item from "./pages/Item";

export default function App() {
	return (
		<div className="App ">
			<Router>
				<Navbar />
				<Tabs />
				<Login />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Inventory" element={<Inventory />} />
					<Route path="/AddItem" element={<AddItem />} />
					<Route path="/Item" element={<Item />} />
				</Routes>
			</Router>
		</div>
	);
}
