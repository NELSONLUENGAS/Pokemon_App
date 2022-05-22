const  { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('ability',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true, 
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },{timestamps: false})
}