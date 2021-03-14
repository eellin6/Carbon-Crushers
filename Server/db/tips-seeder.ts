import { QueryInterface, Sequelize } from 'sequelize/types';

module.exports = {
  up: (QueryInterface: QueryInterface, Sequelize: Sequelize) => {
    return QueryInterface.bulkInsert('Tips', [
      {
        stat: 'meat',
        tip: 'a tip goes here'
      },
      {
        stat: 'electricity',
        tip: 'a tip goes here'
      },
      {
        stat: 'water',
        tip: 'a tip goes here'
      },
      {
        stat: 'recycling',
        tip: 'a tip goes here'
      },
      {
        stat: 'screenTime',
        tip: 'a tip goes here'
      },
      {
        stat: 'dineout',
        tip: 'a tip goes here'
      },
      {
        stat: 'mileage',
        tip: 'a tip goes here'
      },
    ]);
  },
  down: (QueryInterface: QueryInterface, Sequelize: Sequelize) => {
    return QueryInterface.bulkDelete('Tips', null, {});
  },
};

