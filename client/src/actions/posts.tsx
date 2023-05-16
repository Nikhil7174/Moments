import * as api from "../api";
import { Dispatch } from "redux";

//Action Creators
const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export default getPosts;
