'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'fake-user@user.io',
        username: 'fake-lition',
        hashedPassword: bcrypt.hashSync('pass-on-by'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'fake-tillion@user.io',
        username: 'fake-tillion',
        hashedPassword: bcrypt.hashSync('wordy-sometimes'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser5',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser6',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'bride2be@user.io',
        username: 'bridezilla',
        hashedPassword: bcrypt.hashSync('yes-indeed'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser7',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser8',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'bride-wars@user.io',
        username: 'Army-brides',
        hashedPassword: bcrypt.hashSync('not-always'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser9',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser10',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'cinderella-bride@user.io',
        username: 'Cinderella-Bride',
        hashedPassword: bcrypt.hashSync('possibly'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser11',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser12',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'bohemian-bride@user.io',
        username: 'Boho-bride',
        hashedPassword: bcrypt.hashSync('so'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser13',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser14',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'fake-lition','FakeUser3','FakeUser4', 'fake-tillion', 'FakeUser5', 'FakeUser6', 'bridezilla', 'FakeUser7', 'FakeUser8', 'Army-brides', 'FakeUser9', 'FakeUser10', 'Cinderella-Bride', 'FakeUser11', 'FakeUser12', 'Boho-bride', 'FakeUser13', 'FakeUser14'] }
    }, {});
  }
};
