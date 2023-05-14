import { Request, Response } from 'express';
import PostMessage from '../models/postMessage';

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