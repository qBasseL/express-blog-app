import mysql2 from "mysql2/promise";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "../../config/config.service.js";

export const connection = async () => {
  return await mysql2
    .createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT,
      database: DB_NAME,
    })
    .catch((error) => {
      console.log(`Faild to Connect to DATABASE`);
    });
};
