import React from "react";
import {
  AppBar,
  Link,
  Typography,
  Toolbar,
  Avatar,
  Button,
} from "@material-ui/core";
import moments from "../../images/moments.png";
import useStyles from "./styles";
// import { Link } from "react-router-dom";

function Navbar() {
  const classes = useStyles();
  const user: any = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          //   component={Link}
          //   to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          <Link href="/" underline="none">
            Moments
          </Link>
        </Typography>
        <img
          className={classes.image}
          src={moments}
          alt="moments"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Link href="/auth" underline="none">
              <Button variant="contained" color="primary">
                Sign In
              </Button>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
