/* eslint-disable camelcase */
const {Sequelize} = require('sequelize');
const db = new Sequelize('crushers', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


db.authenticate()
  .then(() => console.log('CONNECTED TO DATABASE'))
  .catch((err: string = "err") => console.warn('DB ERROR', err));

const Users = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  picture: Sequelize.STRING
});
const Stats = db.define('Stats', {
  meat: Sequelize.INTEGER,
  electricity: Sequelize.INTEGER,
  water: Sequelize.INTEGER,
  recycling: Sequelize.INTEGER,
  screenTime: Sequelize.INTEGER,
  dineOut: Sequelize.INTEGER,
  mileage: Sequelize.INTEGER,
  total: Sequelize.INTEGER,
  id_user: Sequelize.INTEGER
});
const Showers = db.define('Showers', {
  id_user: Sequelize.INTEGER,
  time: Sequelize.INTEGER,
  showerCount: Sequelize.INTEGER
});
const Friends = db.define('Friends', {
  id_user: Sequelize.INTEGER,
  friendsName: Sequelize.STRING,
  status: Sequelize.STRING
});
const Badges = db.define('Badges', {
  id_user: Sequelize.INTEGER,
  badgeName: Sequelize.STRING,
  imgUrl: Sequelize.STRING,
  badgeStatus: Sequelize.STRING
});
const MonthlyLeaderBoard = db.define('MonthlyLeaderBoard', {
  id_user: Sequelize.INTEGER,
  monthly_score: Sequelize.INTEGER,
  monthly_meat: Sequelize.INTEGER,
  monthly_electricity: Sequelize.INTEGER,
  monthly_water: Sequelize.INTEGER,
  monthly_recycling: Sequelize.INTEGER,
  monthly_screenTime: Sequelize.INTEGER,
  monthly_dineout: Sequelize.INTEGER,
  monthly_mileage: Sequelize.INTEGER,
  month_name: Sequelize.STRING
});
const Updates = db.define('Updates', {
  requests: Sequelize.STRING,
  id_user: Sequelize.INTEGER,
  badge: Sequelize.STRING
});

// db.sync({ force: true })
//   .then(() => {
//     console.log('Database & tables created!');
//   }).catch((err: string) => { console.log(err); });

const addUser = (name: string, picture: string) => {
  return Users.findOrCreate({ name, picture, where: { name, picture } });
};

const findUser = (name: string) => {
  return Users.findOne({ where: { name } });
};


module.exports = {
  db,
  Users,
  Stats,
  Showers,
  Badges,
  MonthlyLeaderBoard,
  Updates,
  addUser,
  findUser
};
