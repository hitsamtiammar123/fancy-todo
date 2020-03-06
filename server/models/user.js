'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model=sequelize.Sequelize.Model;
  const jwt=require('jsonwebtoken');

  class User extends Model{

    static validateToken(token){
      let secret=process.env.JWT_SECRET || 'hehe' ;
      let decoded =jwt.verify(token,secret);
      return decoded;
    }

    get tokenvalue(){
      return { 
        email: this.email,
        id:this.id,
        name:this.name 
      }
    }

  }

  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          msg:'Format harus email'
        }
      }
    },
    google_token:DataTypes.STRING,
    google_login_token:DataTypes.STRING
  }, {sequelize,tableName:'Users'})

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo,{foreignKey:'userId'});
  };
  return User;
};