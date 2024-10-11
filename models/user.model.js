const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');


const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        surname : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        gender : {
            type : DataTypes.STRING,
            allowNull : false,
        },

        email : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        address : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        neighborhood  : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        city  : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        state  : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        cp  : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        rol :{
            type : DataTypes.STRING            
        },
        phone :{
            type : DataTypes.STRING,
            allowNull : false,
        },
        AUP :{
            type : DataTypes.BOOLEAN,
            allowNull: false
        }
    },{    
        tableName: 'users', 
    },
)


module.exports=User