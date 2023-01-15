const { faker } = require('@faker-js/faker');

const users = [
  {
    // id: 1,
    name: 'Kyle Admin',
    email: 'mail1',
    password: '123',
    role: 'ADMIN',
    createdAt: new Date(),
  },
  {
    // id: 2,
    name: 'Kate Moder',
    email: 'mail2',
    password: '123',
    role: 'MODERATOR',
    createdAt: new Date(),
  },
  {
    // id: 3,
    name: 'User 3 name',
    email: 'mail3',
    password: '123',
    role: 'BASIC',
    createdAt: new Date(),
  },
  {
    // id: 4,
    name: 'User 4 name',
    email: 'mail4',
    password: '123',
    role: 'BASIC',
    createdAt: new Date(),
  },
];

module.exports = { users };
