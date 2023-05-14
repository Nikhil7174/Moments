import { Request, Response } from 'express';

export const getPosts = (req: Request, res: Response): void => {
    res.send('this works');
};