import express, { Router } from "express";

import { getPosts, createPosts, updatePost, deletePost, likePost } from '../controllers/posts'
import auth from '../middleware/auth'

const router: Router = express.Router()

router.get("/", getPosts);
router.post("/", auth, createPosts);
router.patch('/:id', auth, updatePost)
router.delete("/:id", auth, deletePost)
router.patch('/:id/likePost', auth, likePost)

export default router;

// export default (): express.Router => {
//     router.get('/', (req, res) => {
//         res.send('this works')
//     })
//     return router

// }