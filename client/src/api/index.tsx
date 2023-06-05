import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchPosts = (): Promise<any> => API.get("/posts");
export const createPost = (newPost: any): Promise<any> =>
  API.post("/posts", newPost);
export const updatePost = (id: string, updatePost: any) =>
  API.patch(`/posts/${id}`, updatePost);
export const deletePost = (id: string) => API.delete(`/posts/${id}`);
export const likePost = (id: string) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData: any) => API.post("/user/signin", formData);
export const signUp = (formData: any) => API.post("/user/signup", formData);
