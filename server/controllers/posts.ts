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

export const createPost = async (req: any, res: Response): Promise<void> => {
    const post = req.body;
    const newPostMessage = new PostMessage(post)
    try {
        await newPostMessage.save()
        res.status(201).json(newPostMessage)
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

export const likePost = async (req: any, res: Response): Promise<any> => {
    const { id: _id } = req.params;

    if (!req.userId) return res.json({ message: "Unauthenticated" })

    if (!mongoose.Types.ObjectId.isValid(_id)) { return res.status(404).send('no post with that id') }

    const post: any = await PostMessage.findById(_id)

    // console.log("like id: ", post.likes[index])
    // console.log("user id: ", req.userId)
    for (var i = 0; i < post.likes.length; i++) {
        if (post.likes[i] === String(req.userId))
            var index = i;
        else
            index = undefined;
    }
    // const index = post.likes.findIndex((id: any) => { id === String(req.userId) })
    // console.log("index: ", index);
    if (index === undefined) {
        post.likes.push(req.userId)

    } else {
        // post.likes = post.likes.filter((id: any) => { id != String(req.userId) })
        const filteredLikes = [];
        for (let i = 0; i < post.likes.length; i++) {
            const id = post.likes[i];
            if (id !== String(req.userId)) {
                filteredLikes.push(id);
            }
        }
        post.likes = filteredLikes;

    }
    // console.log("post like id: ", post.likes)

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true })

    res.json(updatedPost)
}