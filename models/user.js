const {  DataTypes } = require('sequelize');
const { db } = require('../database/config');


const User = db.define('users', {
  // Model attributes are defined here
  iduser: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  modified_on : {
      type:DataTypes.DATE,
      allowNull: false
  },
  created_on : {
    type:DataTypes.DATE,
    allowNull: false
},
last_login : {
    type:DataTypes.DATE,
    //allowNull: false
}
}, {
    timestamps: false
});

module.exports =   User   ;

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true