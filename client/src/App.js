import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItem from "./components/AddItem";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

export default function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Login />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/AddItem" element={<AddItem />} />
				</Routes>
			</Router>
		</div>
	);
}
