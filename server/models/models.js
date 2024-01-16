const sequelize = require('../db');
const { DataTypes } = require('sequelize');

// User table
const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "USER"
  }
})

// Basket table
const Basket = sequelize.define('basket', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  }
})

// BasketDevice table
const BasketDevice = sequelize.define('basket_device', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  }
})

// Device table
const Device = sequelize.define('device', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.INTEGER, 
    unique: true,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 0 
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

// Type
const Type = sequelize.define('type', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.INTEGER, 
    unique: true,
    allowNull: false
  },
})

// Brand
const Brand = sequelize.define('brand', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.INTEGER, 
    unique: true,
    allowNull: false
  },
})

// Rating
const Rating = sequelize.define('rating', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  rate: {
    type: DataTypes.INTEGER, 
    allowNull: false
  },
})

// DeviceInfo
const DeviceInfo = sequelize.define('device_info', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
  info: {
    type: DataTypes.STRING, 
    allowNull: true
  },
})

const TypeBrand = sequelize.define('type_brand', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  },
})

// Relations
User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo);
DeviceInfo.belongsTo(Device);

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through: TypeBrand});

// export 
module.exports = {
  User,
  Basket,
  BasketDevice,
  Brand,
  Device,
  DeviceInfo,
  Rating,
  Type,
  TypeBrand
}