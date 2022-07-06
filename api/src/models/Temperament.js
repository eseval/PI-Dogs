const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('temperament', {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
    }, {
        timestamps: false
    });
    };
