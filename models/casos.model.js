import { DataTypes } from 'sequelize';
import sequelize from '../db/db.js';



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



export default Casos;