import express, { Router } from "express";

import { getPosts, createPosts } from '../controllers/posts'

const router: Router = express.Router()

router.get("/", getPosts);
router.post("/", createPosts);

export default router;

// export default (): express.Router => {
//     router.get('/', (req, res) => {
//         res.send('this works')
//     })
//     return router

// }