const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolver');


async function startServer(){
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs, resolvers
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });

    app.use((req, res) => {
        res.send('Apollo Server');
    });

    app.listen(8080, () => console.log('Server started on port 8080'));
}
startServer();