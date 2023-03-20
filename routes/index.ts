import { Router } from "express"
const router = Router()



router.get('/', (req, res) => {
    res.send("REST API is working!")
})

export default router