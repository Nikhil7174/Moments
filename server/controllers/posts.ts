import { Request, Response } from 'express';
import PostMessage from '../models/postMessage';
import mongoose from 'mongoose';

//https://www.restapitutorial.com/httpstatuscodes.html
export const getPosts = async (req: Request, res: Response): Promise<void> => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.mesage })
    }
};

export const createPosts = async (req: Request, res: Response): Promise<void> => {
    const post = req.body;
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};

// /post/id
export const updatePost = async (req: Request, res: Response): Promise<any> => {
    const { id: _id } = req.params
    const post = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) { return res.status(404).send('no post with that id') }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

    res.json(updatedPost)
}

export const deletePost = async (req: Request, res: Response): Promise<any> => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) { return res.status(404).send('no post with that id') }
    await PostMessage.findByIdAndRemove(_id)
    res.json({ message: "Post deleted successfully" })
}