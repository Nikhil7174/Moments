import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

//get the current id of the post

function Form({ currentId, setCurrentId }): JSX.Element {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state: any) =>
    currentId ? state.posts.find((p: any) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const dispatch = useDispatch();
  const classes = useStyles();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null),
      setPostData({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
      });
  };
  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root},${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentId ? "Edit" : "Capture"} Your Moment
          </Typography>
          <TextField
            name="creator"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          ></TextField>
          <TextField
            name="title"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          ></TextField>
          <TextField
            name="message"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          ></TextField>
          <TextField
            name="tags"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          ></TextField>
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Add
          </Button>
          <Button
            // className={classes.buttonSubmit}
            variant="contained"
            color="secondary"
            size="small"
            // type="submit"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
}

export default Form;
