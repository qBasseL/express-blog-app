import { Router } from "express";
import { profile, update, deleteUser,getUser, restoreUser } from "./user.service.js";
const router = Router()

router.get('/', async (req, res, next) => {
    const result = await profile(req.query.id)
    return res.status(200).json({
        Message:"You Are in The Profile",
        result
    })
})

router.patch('/:userId', async (req, res, next) => {
    const result = await update(req.params.userId, req.body)
    return res.status(200).json({
        Message:"Update Succeded",
        data : result
    })
})

router.get('/:userId', async (req, res, next) => {
    const result = await getUser(req.params.userId)
    return res.status(200).json({
        Message:"Fetch Succeded",
        data : result
    })
})

router.delete('/:userId', async (req, res, next) => {
    const result = await deleteUser(req.params.userId)
    return res.status(200).json({
        Message:"Delete Succeded",
        data : result
    })
})

router.patch('/:userId/restore', async (req, res, next) => {
    const result = await restoreUser(req.params.userId)
    return res.status(200).json({
        Message:"Restoration Succeded",
        data : result
    })
})

export default router