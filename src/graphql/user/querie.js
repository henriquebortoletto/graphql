const { gql } = require("graphql-tag");

export const FRAGMENT_USER = gql`
  fragment usuarioCompleto on User {
    id
    name
    email
    age
    role {
      id
      name
    }
  }
`;

export const GET_ALL_USERS = gql`
  query {
    users {
      id
      name
      email
      age
      role {
        id
        name
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query(id: $id) {
    users {
      id
      name
      email
      age
      role {
        id
        name
      }
    }
  }
`;

export const GET_ALL_ROLES = gql`
  query {
    roles {
      id
      name
    }
  }
`;

export const GET_ROLES_BY_ID = gql`
  query(id: $id) {
    roles {
      id
      name
    }
  }
`;

export const GET_ALL_USER_COMPLETE = gql`
  query {
    user(id: 1) {
      ...usuarioCompleto
    }
  }
`;
