import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

const Cliente = sequelize.define(
    "Cliente",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidoPaterno: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidoMaterno: {
            type: DataTypes.STRING,
            allowNull: true
        },
        domicilio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        tableName: "clientes",
        timestamps: false
    }
);

export { Cliente };