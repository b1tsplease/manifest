const faker = require("faker");

module.exports = {
  subscriptions: [
    {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      occupation: faker.name.jobTitle()
    },
    {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      occupation: faker.name.jobTitle()
    },
    {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      occupation: faker.name.jobTitle()
    },
    {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      occupation: faker.name.jobTitle()
    },
    {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      occupation: faker.name.jobTitle()
    }
  ]
};
