import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

function Posts(): JSX.Element {
  const posts = useSelector((state: any) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return (
    <>
      <h1 className="  ">Posts</h1>
      <Post />
      <Post />
      <Post />
    </>
  );
}

export default Posts;
