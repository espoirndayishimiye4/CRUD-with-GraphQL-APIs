const { ApolloServer } = require("apollo-server-express");
const Express = require("express");

const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");

const app = Express();
const PORT = 4500;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
async function startServer() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
