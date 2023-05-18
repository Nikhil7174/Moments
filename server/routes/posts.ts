import express, { Router } from "express";

import { getPosts, createPosts, updatePost } from '../controllers/posts'

const router: Router = express.Router()

router.get("/", getPosts);
router.post("/", createPosts);
router.patch('/:id', updatePost)

export default router;

// export default (): express.Router => {
//     router.get('/', (req, res) => {
//         res.send('this works')
//     })
//     return router

// }