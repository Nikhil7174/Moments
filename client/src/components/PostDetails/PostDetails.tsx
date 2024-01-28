//@ts-nocheck
import * as toxicity from "@tensorflow-models/toxicity";
import * as tf from '@tensorflow/tfjs';
tf.setBackend('webgl'); // set backend to webgl for better performance
import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { getPost, getPostsBySearch } from "../../actions/posts";
import CommentSection from "./CommentSection";
import { purple } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const color = purple[700];

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();

  const [toxicityPredictions, setToxicityPredictions] = useState([]);
  const [isToxicityLoading, setIsToxicityLoading] = useState(false);

  const checkToxicity = async (text, threshold) => {
    setIsToxicityLoading(true);
  
    try {
      // Set the backend before loading the model
      tf.setBackend('webgl'); // or 'cpu', 'wasm', etc.
  
      const model = await toxicity.load(threshold);
      const predictions = await model.classify([text]);
  
      setToxicityPredictions(predictions);
      console.log(predictions);
    } catch (error) {
      console.error("Error loading or classifying with toxicity model:", error);
    } finally {
      setIsToxicityLoading(false);
    }
  };
  
  

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      checkToxicity(post.title, 0.9);
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size={"7em"} />
      </Paper>
    );
  }

  // const recommendedPosts = posts.filter(({ ..._id }) => _id != posts._id);
  // console.log(posts);
  // console.log(id);
  // console.log(posts._id);

  const recommendedPosts = [];
  for (let i = 0; i < posts.length; i++) {
    if (posts[i]._id !== id) {
      recommendedPosts.push(posts[i]);
    }
  }

  const openPost = (_id: any) => navigate(`/posts/${_id}`);

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag: any) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />

          
{isToxicityLoading && <CircularProgress size={"1em"} />}
{toxicityPredictions.length > 0 && (
  <div>
    <Typography variant="h6">Labels:</Typography>
    <ul>
      <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", marginLeft:"-20px"}}>
      {toxicityPredictions
        .filter((prediction) => prediction.results[0].match)
        .map((prediction, index) => (
          <div key={index} className="p-4" >
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", margin:"10px"}}>
            <Chip label={prediction.label} color="error" />
              {/* :
              {prediction.results[0].probabilities[1].toFixed(4)} */}
            </div>
          </div>
      
        ))}
      </div>
      {toxicityPredictions.every((prediction) => !prediction.results[0].match) && (
        <Chip label={"General"} color="success" />
      )}
    </ul>
  </div>
)}


          <CommentSection post={post} />

          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </div>
      {recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, message, name, likes, selectedFile, _id }: any) => (
                <div
                  style={{ margin: "20px", cursor: "pointer" }}
                  onClick={() => {
                    openPost(_id);
                  }}
                  key={_id}
                >
                  <Typography gutterBottom variant="h6">
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {name}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {message}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    Likes: {likes.length}
                  </Typography>
                  <img src={selectedFile} width="200px" />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;
