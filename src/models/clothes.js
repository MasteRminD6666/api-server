'use strict';

const clothes = (sequelize,DataTypes) => sequelize.define('clothes',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
    },

})
module.exports = clothes