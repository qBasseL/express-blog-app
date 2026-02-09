import { sequelize } from "../database.connection.js";
import { DataTypes } from "sequelize";
import { Model } from "sequelize";

export class BlogModel extends Model {}
BlogModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      field: "B_id",
    },

    title: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: "B_title",
    },

    content: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: "B_content",
    },
  },
  {
    sequelize: sequelize,
  },
);
