const express = require('express');
const {ApolloServer} = require ('apollo-server-express');
const path = require('path');

// Import the two parts of a GraphQL schema
const {typeDefs, resolvers} = require('./schemas');
const db = require ('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({app});

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
}

startApolloServer(typeDefs, resolvers);