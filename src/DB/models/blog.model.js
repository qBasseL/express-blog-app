import { sequelize } from "../database.connection.js";
import { DataTypes } from "sequelize";
import { Model } from "sequelize";
import { Usermodel, UserModel } from "./user.model.js";

export const BlogModel = sequelize.define(
  "Blog",
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
    tableName: "blogs",
    freezeTableName: true,
    timestamps: true,
    createdAt: "B_createdAt",
    updatedAt: "B_updatedAt",
    // paranoid: true,
  },
);

BlogModel.belongsTo(UserModel, {
  foreignKey: {
    name: "B_authorId",
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

UserModel.hasMany(BlogModel, {
  foreignKey: {
    name: "B_authorId",
    allowNull: false,
  }
});
