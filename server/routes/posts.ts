import express, { Router } from "express";

import { getPosts } from '../controllers/posts'

const router: Router = express.Router()

router.get("/", getPosts);

export default router;

// export default (): express.Router => {
//     router.get('/', (req, res) => {
//         res.send('this works')
//     })
//     return router

// }