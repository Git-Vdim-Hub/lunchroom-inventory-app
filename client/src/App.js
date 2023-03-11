
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItem from "./components/AddItem"
import Home from "./pages/Home";
import Inventory from "./pages/Inventory"
import Navbar from "./components/Navbar";

export default function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Inventory" element={<Inventory/>}/>
						<Route path="/AddItem" element={<AddItem />} />
					</Routes>
			</Router>
		</div>
	);
}
