import { Sequelize } from "sequelize";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "../../config/config.service.js";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
});

export const authenticateDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true, force: false});
    console.log(`Connection to database is successful`);
  } catch (error) {
    console.error(`Unable to connect to database`, error);
  }
};
