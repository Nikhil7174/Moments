import * as api from "../api";
import { Dispatch } from "redux";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionType";

//Action Creators
export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

// interface Post {
//   // Define the type of properties in your Post object
//   title: string;
//   body: string;
//   // ...
// }

export const createPost = (post: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("some error", error);
  }
};

export const updatePost =
  (id: string, post: any) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const deletePost = (id: string) => async (dispatch: Dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
