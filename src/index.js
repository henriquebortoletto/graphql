const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { ApolloServer, gql } = require("apollo-server");

const users = [
  {
    id: 1,
    name: "Henrique Bortoletto",
    email: "bortolettohenrique@gmail.com",
    age: 29,
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@gmail.com",
  },
  {
    id: 3,
    name: "Jane Doe",
    email: "janedoe@gmail.com",
  },
];

const profiles = [
  {
    id: 1,
    name: "user",
  },
  {
    id: 2,
    name: "client",
  },
  {
    id: 3,
    name: "administrator",
  },
];

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    age: Int
  }

  type Role {
    id: Int!
    name: String!
  }

  type Query {
    users: [User!]!
    user(id: Int): User
    profiles: [Role!]!
    profile(id: Int): Role
  }
`;

const resolvers = {
  Query: {
    users: () => {
      return users;
    },

    user: (_, { id }) => {
      const userAlreadyExists = users.filter((user) => user.id === id);
      return userAlreadyExists.length ? userAlreadyExists[0] : null;
    },

    profiles: () => {
      return profiles;
    },

    profile: (_, { id }) => {
      const profileAlreadyExists = profiles.filter((profile) => profile.id === id);
      return profileAlreadyExists.length ? profileAlreadyExists[0] : null;
    },
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
