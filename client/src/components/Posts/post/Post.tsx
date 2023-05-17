import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";

function Post(): JSX.Element {
  const classes = useStyles();
  return (
    <>
      <Card>
        <CardMedia className={classes.media}></CardMedia>
      </Card>
    </>
  );
}

export default Post;
