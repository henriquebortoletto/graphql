const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    ola: String!
  }
`;

const resolvers = {
  Query: {
    ola: () => "Hello World",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
