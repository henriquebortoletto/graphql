const userResolvers = require("./user/resolvers");
const userTypeDefs = require("./user/typeDefs");

const typeDefs = [userTypeDefs];

const resolvers = { ...userResolvers };

module.exports = { typeDefs, resolvers };
