const id = require("../utils/id");

const users = [
  {
    id: id(),
    name: "Henrique Bortoletto",
    email: "bortolettohenrique@gmail.com",
    age: 29,
    status: "inactive",
    role_id: 3,
  },
  {
    id: id(),
    name: "John Doe",
    email: "johndoe@gmail.com",
    status: "blocked",
    role_id: 1,
  },
  {
    id: id(),
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    status: "active",
    role_id: 2,
  },
];

module.exports = users;
