import { Router } from "express";
const router = Router()

router.get('/', (req, res, next) => {
    return res.status(200).json({
        Message:"You Are in The Profile"
    })
})

export default router