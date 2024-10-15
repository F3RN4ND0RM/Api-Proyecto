const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');


const Citas = sequelize.define('Citas', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fecha : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        hora : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        id_cliente : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },

        id_abogado : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        
        status : {
            type : DataTypes.INTEGER
        },
    },{    
        tableName: 'citas', 
    },
)


module.exports=Citas
