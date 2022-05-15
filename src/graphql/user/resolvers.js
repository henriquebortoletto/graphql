const users = require("../../data/users.mock");
const roles = require("../../data/roles.mock");

const id = require("../../utils/id");

const resolvers = {
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

  Mutation: {
    newUser: (_, { name, email, age }) => {
      const createNewUser = {
        id: id(),
        name,
        email,
        age,
        status: "active",
        role_id: 1,
      };

      users.push(createNewUser);
      return createNewUser;
    },
  },

  User: {
    role: ({ role_id }) => {
      const userRoleExists = roles.filter(({ id }) => id === role_id);
      return userRoleExists.length ? userRoleExists[0] : null;
    },

    status: (user) => {
      return user.status.toUpperCase();
    },
  },
};

module.exports = resolvers;
