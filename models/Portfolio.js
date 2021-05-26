const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Portfolio extends Model {}

Portfolio.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    stock: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    shares: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'portfolio',
})

module.exports = Portfolio;