import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";


// this is all that is needed to set up caching
// default caching strategy is 'cache-first' meaning it will check the cache for queried data before making a call to the database
const client = new ApolloClient({
	uri: "/graphql",
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
