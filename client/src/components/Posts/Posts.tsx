import React from "react";
import Post from "./post/Post";
import useStyles from "./styles";

function Posts(): JSX.Element {
  const classes = useStyles();
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
