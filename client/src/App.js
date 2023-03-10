import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./utils/UserContext";
import { redirect } from "./utils/helpers";
import AddItem from "./pages/AddItem";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Inventory from "./pages/Inventory";
import Tabs from "./components/Tabs";
import Navbar from "./components/Navbar";
import Item from "./pages/Item";

export default function App() {
	return (
		<UserProvider>
			<div className="App ">
				<Router>
					<Navbar />
					<Tabs />
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/Home" element={<Home />} />
						<Route path="/Inventory" element={<Inventory />} />
						<Route path="/AddItem" element={<AddItem />} />
						<Route path="/Item/:itemId" element={<Item />} />
					</Routes>
				</Router>
			</div>
		</UserProvider>
	);
}
