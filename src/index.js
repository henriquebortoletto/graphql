const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { ApolloServer, gql } = require("apollo-server");

const users = [
  {
    id: 1,
    name: "Henrique Bortoletto",
    email: "bortolettohenrique@gmail.com",
    age: 29,
    role_id: 3,
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role_id: 1,
  },
  {
    id: 3,
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    role_id: 2,
  },
];

const roles = [
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
    role: Role
  }

  type Role {
    id: Int!
    name: String!
  }

  type Query {
    users: [User!]!
    user(id: Int): User
    roles: [Role!]!
    role(id: Int): Role
  }
`;

const resolvers = {
  User: {
    role: ({ role_id }) => {
      const userRoleExists = roles.filter(({ id }) => id === role_id);
      return userRoleExists.length ? userRoleExists[0] : null;
    },
  },

  Query: {
    users: () => {
      return users;
    },

    user: (_, { id: user_id }) => {
      const userAlreadyExists = users.filter(({ id }) => id === user_id);
      return userAlreadyExists.length ? userAlreadyExists[0] : null;
    },

    roles: () => {
      return roles;
    },

    role: (_, { id: role_id }) => {
      const rolesAlreadyExists = roles.filter(({ id }) => id === role_id);
      return rolesAlreadyExists.length ? rolesAlreadyExists[0] : null;
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
