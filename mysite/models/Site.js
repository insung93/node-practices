const { Sequelize, DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('Site', {
        title: { 
            field: 'title',
            type: DataTypes.STRING(50),
            primaryKey: true
        },
        welcome: {
            field: 'welcome',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        profile: {
            field: 'profile',
            type: DataTypes.STRING(200),
            allowNull: false
        },
        description: {
            field: 'description',
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        underscored: true,    
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'site'
    });
}