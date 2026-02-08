import express from "express";
import { authRouter, userRouter } from "./modules/index.js";
import { PORT } from "../config/config.service.js";
import { authenticateDB } from "./DB/database.connection.js";
// import { UserModel } from "./DB/models/user.model.js";

const bootstrap = async () => {
  const app = express();
  //   const port = 3000;

  app.use(express.json());
  await authenticateDB();
  // await UserModel.sync({ alter: true, force: false, match:/_test$/ });

  app.get("/", (req, res, next) => {
    return res.status(200).json({
      Message: "Welcome To Folder Structure",
    });
  });

  app.use("/auth", authRouter);
  app.use("/user", userRouter);

  app.use((error, req, res, next) => {
    const status = error?.cause?.status ?? 500;
    res
      .status(status)
      .json({ Message: error.message || "Somthing Went Wrong" });
  });

  app.use("{/*url}", (req, res, next) => {
    return res.status(404).json({
      Message: "Invalid Routing",
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default bootstrap;
