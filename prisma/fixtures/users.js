const { faker } = require('@faker-js/faker');

const users = [
  {
    name: 'Kyle Admin',
    email: 'mail1',
    password: '123',
    role: 'ADMIN',
    createdAt: new Date(),
  },
  {
    name: 'Kate Moder',
    email: 'mail2',
    password: '123',
    role: 'MODERATOR',
    createdAt: new Date(),
  },
  {
    name: 'User 3 name',
    email: 'mail3',
    password: '123',
    role: 'BASIC',
    createdAt: new Date(),
  },
  {
    name: 'User 4 name',
    email: 'mail4',
    password: '123',
    role: 'BASIC',
    createdAt: new Date(),
  },
];

module.exports = { users };
