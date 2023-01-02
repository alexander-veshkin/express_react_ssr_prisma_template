const { faker } = require('@faker-js/faker');

const posts = [
  {
    title: 'Seed post 1, User id 2',
    body: faker.random.words(Math.floor(Math.random() * (50 - 10) + 10)),
    date: new Date(),
    user_id: 2,
  },
  {
    title: 'Seed post 2, User id 2',
    body: faker.random.words(Math.floor(Math.random() * (50 - 10) + 10)),
    date: new Date(),
    user_id: 2,
  },
  {
    title: 'Seed post 3, User id 3',
    body: faker.random.words(Math.floor(Math.random() * (50 - 10) + 10)),
    date: new Date(),
    user_id: 3,
  },
  {
    title: 'Seed post 3, User id 3',
    body: faker.random.words(Math.floor(Math.random() * (50 - 10) + 10)),
    date: new Date(),
    user_id: 3,
  },
  {
    title: 'Seed post 5, User id 3',
    body: faker.random.words(Math.floor(Math.random() * (50 - 10) + 10)),
    date: new Date(),
    user_id: 3,
  },
];

module.exports = { posts };
