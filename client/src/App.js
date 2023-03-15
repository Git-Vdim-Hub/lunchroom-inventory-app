import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { UserProvider } from "./utils/UserContext";
import { redirect } from "./utils/helpers";
import AddItem from "./pages/AddItem";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Inventory from "./pages/Inventory";
import Tabs from "./components/Tabs";
import Navbar from "./components/Navbar";
import Item from "./pages/Item";

const httpLink = createHttpLink({
	uri: '/graphql',
  });
const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('id_token');
	// return the headers to the context so httpLink can read them
	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : '',
	  },
	};
});

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
  });

export default function App() {
	return (
		<ApolloProvider>
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
		</ApolloProvider>
	);
}
