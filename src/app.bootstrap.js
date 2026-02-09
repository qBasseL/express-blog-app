import express from "express";
import { authRouter, userRouter, blogRouter } from "./modules/index.js";
import { PORT } from "../config/config.service.js";
import { authenticateDB } from "./DB/database.connection.js";

const bootstrap = async () => {
  const app = express();

  app.use(express.json());
  await authenticateDB();

  app.use("/auth", authRouter);
  app.use("/user", userRouter);
  app.use("/blog", blogRouter);

  app.use((error, req, res, next) => {
    const status = error?.cause?.status ?? 500;
    res
      .status(status)
      .json({error, Message: error.message || "Somthing Went Wrong" });
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
