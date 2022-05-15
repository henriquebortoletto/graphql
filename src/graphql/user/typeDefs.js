const { gql } = require("apollo-server");

const typeDefs = gql`
  enum userStatus {
    ACTIVE
    INACTIVE
    BLOCKED
  }

  type User {
    id: Int!
    name: String!
    email: String!
    age: Int
    role: Role
    status: userStatus!
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

module.exports = typeDefs;
