//@ts-nocheck
import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";
// import Pagination from "../Pagination";
import Paginate from "../Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Home() {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState<any>("");
  const query = useQuery();
  const navigate = useNavigate();
  const page: any = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAdd = (tag: any) => {
    setTags([...tags, tag]);
  };
  const handleDelete = (tagToDelete: any) => {
    setTags(tags.filter((tag) => tag != tagToDelete));
  };
  return (
    <div>
      <Helmet>
        <meta
          name="google-site-verification"
          content="LTEslH9dKKs5wwLu8JhLPM4jiI1qE-M05wJUK2eKZnU"
        />
      </Helmet>
      <Grow in>
        <Container maxWidth="xl">
          <Grid
            className={classes.gridContainer}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
              >
                <TextField
                  name="search"
                  variant="outlined"
                  label="Search Memories"
                  fullWidth
                  onKeyPress={handleKeyPress}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <ChipInput
                  style={{ margin: "10px 0" }}
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  label="search tags"
                  variant="outlined"
                />
                <Button
                  onClick={searchPost}
                  className={classes.searchButton}
                  color="primary"
                  variant="contained"
                >
                  Search
                </Button>
              </AppBar>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              {!searchQuery && !tags.length && (
                <Paper className={classes.pagination} elevation={6}>
                  <Paginate page={page} />
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}

export default Home;
