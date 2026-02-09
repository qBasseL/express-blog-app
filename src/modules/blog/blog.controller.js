import { Router } from "express";
import { createBlog, getBlog } from "./blog.service.js";
const router = Router()

router.post('/', async (req, res, next) => {
    const result = await createBlog(req.body)
    return res.status(201).json({
        Message: "Done",
        result
    })
})

router.get('/', async (req, res, next) => {
    const result = await getBlog()
    return res.status(200).json({
        Message: "Done",
        result
    })
})


export default router