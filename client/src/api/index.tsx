import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = (): Promise<any> => axios.get(url);

export const createPost = (newPost: any): Promise<any> =>
  axios.post(url, newPost);
