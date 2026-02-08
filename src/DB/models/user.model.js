import { sequelize } from "../database.connection.js"
import { DataTypes } from "sequelize"

export const UserModel = sequelize.define(
    'User',
    {
        firstName:DataTypes.STRING(200)
    }
)




export const Usermodel = []