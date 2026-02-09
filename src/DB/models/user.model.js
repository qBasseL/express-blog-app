import { sequelize } from "../database.connection.js";
import { DataTypes } from "sequelize";

export const UserModel = sequelize.define(
  "User",
  {
    fullName: {
      type: DataTypes.VIRTUAL,
      set(value) {
        const [firstName, middleName, lastName] = value.split(" ");
        this.setDataValue("firstName", firstName);
        this.setDataValue("middleName", middleName);
        this.setDataValue("lastName", lastName);
      },
      get() {
        return (
          this.getDataValue("firstName") +
          " " +
          this.getDataValue("middleName") +
          " " +
          this.getDataValue("lastName")
        );
      },
    },
    firstName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: "U_firstName",
      validate: {
        valid(value) {
          if (value === "admin") {
            throw new Error("Name Cannot be ADMIN");
          }
        },
        notEmpty: true,
      },
    },
    middleName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: "U_middleName",
    },
    lastName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: "U_lastName",
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
      field: "U_email",
      validate: {
        isEmail: { msg: "Please Enter a Valid Email" },
        notEmpty: { msg: "You have to enter an email" },
        notNull: { msg: "Email Can't be NULL" },
      },
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      field: "U_ID",
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING(255),
      field: "U_password",
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("Male", "Female"),
      allowNull: false,
      field: "U_gender",
      defaultValue: "Male",
    },
    DOB: {
      type: DataTypes.DATEONLY,
      field: "U_DOB",
      allowNull: false,
    },
    confirmEmail: {
      type: DataTypes.BOOLEAN,
      field: "U_confirmEmail",
      defaultValue: false,
    },
  },
  {
    createdAt: "U_createdAt",
    updatedAt: "U_updatedAt",
    paranoid: true,
  },
);

export const Usermodel = [];
