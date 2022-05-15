const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { ApolloServer, gql } = require("apollo-server");
const { typeDefs, resolvers } = require("./graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀🚀 Server ready at ${url} 🚀🚀`);
});
