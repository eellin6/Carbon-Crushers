/* eslint-disable camelcase */
/*eslint global-require: "error"*/
/* eslint-disable @typescript-eslint/no-var-requires */
const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv').config();

const host: string = process.env.host;
const database: string = process.env.database;
const password: string = process.env.password;
const username: string = process.env.username;

const db = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql',
  logging: false
});


db.authenticate()
  .then(() => console.info('CONNECTED TO DATABASE'))
  .catch((err = 'err') => console.warn('DB ERROR', err));

interface UserAttributes {
  id: number,
  name: string | null,
  username: string | null,
  picture: string | null,
  vision: string
}
class Users extends Model<UserAttributes>
  implements UserAttributes {
    public id!: number;
    public name!: string;
    public username!: string | null;
    public picture: string | null;
    public vision: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: new DataTypes.STRING,
  username: new DataTypes.STRING,
  picture: new DataTypes.STRING,
  vision: {
    type: new DataTypes.STRING,
    defaultValue: 'none',
  },
},
{
  tableName: 'Users',
  sequelize: db
});

interface StatAttributes {
  meat_dine: number | null,
  energy: number | null,
  water: number | null,
  recycling: number | null,
  mileage: number | null,
  total: number | null,
  name: string | null,
  id_user: number | null
}
class Stats extends Model<StatAttributes>
  implements StatAttributes {
    public meat_dine!: number | null;
    public energy!: number | null;
    public water: number | null;
    public recycling: number | null;
    public mileage: number | null;
    public total: number | null;
    public name!: string | null;
    public id_user!: number | null;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Stats.init({
  meat_dine: new DataTypes.INTEGER,
  energy: new DataTypes.INTEGER,
  water: new DataTypes.INTEGER,
  recycling: new DataTypes.INTEGER,
  mileage: new DataTypes.INTEGER,
  total: new DataTypes.INTEGER,
  name: new DataTypes.STRING,
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: 'id'
    }
  }
},
{
  tableName: 'Stats',
  sequelize: db
});

interface CurrentStatAttributes {
  meat_dine: number | null,
  energy: number | null,
  water: number | null,
  recycling: number | null,
  mileage: number | null,
  total: number | null,
  name: string | null,
  id_user: number | null
}
class CurrentStats extends Model<CurrentStatAttributes>
  implements CurrentStatAttributes {
    public meat_dine!: number | null;
    public energy!: number | null;
    public water: number | null;
    public recycling: number | null;
    public mileage: number | null;
    public total: number | null;
    public name!: string | null;
    public id_user!: number | null;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

CurrentStats.init({
  meat_dine: new DataTypes.INTEGER,
  energy: new DataTypes.INTEGER,
  water: new DataTypes.INTEGER,
  recycling: new DataTypes.INTEGER,
  mileage: new DataTypes.INTEGER,
  total: new DataTypes.INTEGER,
  name: new DataTypes.STRING,
  id_user: { type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: 'id'
    }
  }
},
{
  tableName: 'CurrentStats',
  sequelize: db
});

interface ShowerAttributes {
  id_user: number | null
  time: number | null,
  name: string | null
}
class Showers extends Model<ShowerAttributes>
  implements ShowerAttributes {
    public id_user!: number | null;
    public time!: number | null;
    public name!: string | null;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Showers.init({
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: 'id'
    }
  },
  time: new DataTypes.INTEGER,
  name: new DataTypes.STRING
},
{
  tableName: 'Showers',
  sequelize: db
});

interface FriendAttributes {
  id_user: number | null
  friendsName: string | null,
  status: string | null
}
class Friends extends Model<FriendAttributes>
  implements FriendAttributes {
    public id_user!: number | null;
    public friendsName!: string | null;
    public status!: string | null;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Friends.init({
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: 'id'
    }
  },
  friendsName: new DataTypes.STRING,
  status: new DataTypes.STRING
},
{
  tableName: 'Friends',
  sequelize: db
});

interface BadgeAttributes {
  id_user: number | null
  badgeName: string | null,
  badgeStatus: string | null
}
class Badges extends Model<BadgeAttributes>
  implements BadgeAttributes {
    public id_user!: number | null;
    public badgeName!: string | null;
    public badgeStatus!: string | null;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Badges.init({
  id_user: { type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: 'id'
    }
  },
  badgeName: new DataTypes.STRING,
  imgUrl: new DataTypes.STRING,
  badgeStatus: new DataTypes.STRING
},
{
  tableName: 'Badges',
  sequelize: db
});

interface MonthlyLeaderAttributes {
  id_user: number | null,
  monthly_score: number | null,
  monthly_meat: number | null,
  monthly_electricity: number | null,
  monthly_water: number | null,
  monthly_recycling: number | null,
  monthly_screenTime: number | null,
  monthly_dineout: number | null,
  monthly_mileage: number | null,
  month_name: string | null
}
class MonthlyLeaderBoard extends Model<MonthlyLeaderAttributes>
  implements MonthlyLeaderAttributes {
    public id_user!: number | null;
    public monthly_score!: number | null;
    public monthly_meat!: number | null;
    public monthly_electricity!: number | null;
    public monthly_water: number | null;
    public monthly_recycling: number | null;
    public monthly_screenTime: number | null;
    public monthly_dineout: number | null;
    public monthly_mileage: number | null;
    public month_name!: string | null;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

MonthlyLeaderBoard.init({
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: 'id'
    }
  },
  monthly_score: new DataTypes.INTEGER,
  monthly_meat: new DataTypes.INTEGER,
  monthly_electricity: new DataTypes.INTEGER,
  monthly_water: new DataTypes.INTEGER,
  monthly_recycling: new DataTypes.INTEGER,
  monthly_screenTime: new DataTypes.INTEGER,
  monthly_dineout: new DataTypes.INTEGER,
  monthly_mileage: new DataTypes.INTEGER,
  month_name: new DataTypes.STRING
},
{
  tableName: 'MonthlyLeaderBoard',
  sequelize: db
});

interface UpdateAttributes {
  requests: string | null,
  id_user: number | null
  badge: string | null
}
class Updates extends Model<UpdateAttributes>
  implements UpdateAttributes {
    public requests!: string | null;
    public id_user!: number | null;
    public badge!: string | null;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Updates.init({
  requests: new DataTypes.STRING,
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: 'id'
    }
  },
  badge: new DataTypes.STRING
},
{
  tableName: 'Updates',
  sequelize: db
});

// db.sync({ force: true })
//   .then(() => {
//     console.log('Database & tables created!');
//   }).catch((err: string) => { console.log(err); });

const addUser = (name: string, picture: string): UserAttributes => {
  return Users.findOrCreate({ name, picture, where: { name, picture } });
};

const findUser = (name: string): UserAttributes => {
  if (name) {
    return Users.findOne({ where: { name } });
  }
};

const getAllStats = (user: string): StatAttributes => {
  if (user) {
    return Stats.findAll({ where: { name: user } });
  } else {
    return Stats.findAll();
  }
};

const addShower = async (name: string, time: number ): Promise<ShowerAttributes> => {
  const newShower = await Showers.create({
    name: name,
    time: time,
  });
  return newShower.save();
};

const updateVision = (name: string, vision: string): UserAttributes => {
  return Users.update({ vision },
    { return: true, where: { name } })
    .then(() => console.info('vision updated'))
    .catch((err) => console.warn(err));
};


module.exports = {
  db,
  Users,
  Stats,
  Showers,
  Badges,
  CurrentStats,
  MonthlyLeaderBoard,
  Updates,
  addUser,
  findUser,
  getAllStats,
  addShower,
  updateVision
};
