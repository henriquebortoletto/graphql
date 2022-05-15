const users = require("../../data/users.mock");
const roles = require("../../data/roles.mock");

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
