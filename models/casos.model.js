const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');


const Casos = sequelize.define('Casos', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        descripcion : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        tipo : {
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
        juzgado : {
            type : DataTypes.STRING
        },
        observaciones : {
            type : DataTypes.STRING
        }
    },{    
        tableName: 'casos', 
    },
)


module.exports=Casos