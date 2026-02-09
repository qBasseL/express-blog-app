import { Router } from "express";
import { login, signup } from "./auth.service.js";
const router = Router();

router.post("/sign-up", async (req, res, next) => {
  const result = await signup(req.body);
  return res.status(201).json({ Message: "Done Signup", result });
});

router.post("/login", async (req, res, next) => {
  const result = await login(req.body);
  return res.status(200).json({ Message: "Done Login", result });
});

export default router;
