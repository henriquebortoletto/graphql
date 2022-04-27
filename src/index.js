const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type User {
    id: ID
    name: String!
    email: String!
    age: Int
    wage: Float
    vip: Boolean
  }

  type Query {
    currentTime: Date
    userLoggedIn: User
  }
`;

const resolvers = {
  Query: {
    currentTime: () => new Date(),
    userLoggedIn: () => ({
      id: "fbb12189-fd97-4c94-acb7-aa02f6811125",
      name: "Henrique",
      email: "bortolettohenrique@gmail.com",
      age: 29,
      wage: 1234.56,
      vip: true,
    }),
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
