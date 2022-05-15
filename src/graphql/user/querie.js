const { gql } = require("graphql-tag");

export const QUERY_FRAGMENT_USER = gql`
  fragment usuarioCompleto on User {
    id
    name
    email
    age
    status
    role {
      id
      name
    }
  }
`;

export const QUERY_GET_ALL_USERS = gql`
  query {
    users {
      id
      name
      email
      age
      status
      role {
        id
        name
      }
    }
  }
`;

export const QUERY_GET_USER_BY_ID = gql`
  query(id: $id) {
    users {
      id
      name
      email
      age
      status
      role {
        id
        name
      }
    }
  }
`;

export const QUERY_GET_ALL_ROLES = gql`
  query {
    roles {
      id
      name
    }
  }
`;

export const QUERY_GET_ROLES_BY_ID = gql`
  query(id: $id) {
    roles {
      id
      name
    }
  }
`;

export const QUERY_GET_ALL_USER_COMPLETE = gql`
  query {
    user(id: 1) {
      ...usuarioCompleto
    }
  }
`;

export const MUTATION_CREATE_NEW_USER = gql`
  mutation {
    newUser(name: "Maria", email: "maria@gmail.com", age: 19) {
      id
      name
      email
      status
      role {
        id
        name
      }
    }
  }
`;
