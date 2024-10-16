import { DataTypes } from 'sequelize';
import sequelize from '../db/db.js';



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



export default Citas;