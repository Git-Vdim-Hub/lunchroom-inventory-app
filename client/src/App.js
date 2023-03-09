import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";

const client = new ApolloClient({
	uri: "/graphql",
	cache: new InMemoryCache(),
});

export default function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">Display User Info Here</div>;
		</ApolloProvider>
	);
}
