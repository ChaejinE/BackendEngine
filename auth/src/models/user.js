const { Model, STRING } = require("sequelize");

class User extends Model {
    static initiate(sequelize) {
        this.init({
            email: {
                type: STRING(40),
                allowNull: false,
                unique: true
            },
            nickName: {
                type: STRING(15),
                allowNull: false
            },
            password: {
                type: STRING(35),
                allowNull: false
            },
            provider: {
                type: STRING(25),
                allowNull: true
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: "User",
            tableName: "users",
            paranoid: true,
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        })
    }

    static associate(db) {}
};

module.exports = User;
