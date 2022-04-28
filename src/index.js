const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    name: String!
    price: Float!
    discount: Float
    discountPrice: Float
  }

  type Query {
    featuredProduct: Product
  }
`;

const resolvers = {
  Product: {
    discountPrice: ({ discount, price }) => (discount ? price * (1 - discount) : price),
  },

  Query: {
    featuredProduct: () => ({
      name: "Iphone 12",
      price: 500000,
      discount: 0.5,
    }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀🚀 Server ready at ${url} 🚀🚀`);
});
