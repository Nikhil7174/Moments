import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = (): Promise<any> => axios.get(url);

export const createPost = (newPost: any): Promise<any> =>
  axios.post(url, newPost);

export const updatePost = (id: string, updatePost: any) =>
  axios.patch(`${url}/${id}`, updatePost);

export const deletePost = (id: string) => axios.delete(`${url}/${id}`);
