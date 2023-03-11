
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItem from "./components/AddItem"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Item from "./pages/Item";

export default function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/AddItem" element={<AddItem />} />
						<Route path="/Item" element={<Item/>} />
					</Routes>
			</Router>
		</div>
	);
}
