import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import useStyles from "./styles";
import Input from "./Input";

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = () => {};
  const handleChange = () => {};
  const classes = useStyles();
  const isSignup = false;
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <AcUnitIcon />
          </Avatar>
          <Typography variant="h5">
            {isSignup ? "Sign Up" : "Sign In"}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input
                    name="FirstName"
                    label="First Name"
                    handleChange={handleSubmit}
                    autoFocus
                    half
                  />

                  <Input
                    name="FirstName"
                    label="First Name"
                    handleChange={handleSubmit}
                    half
                  ></Input>
                </>
              )}
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
}

export default Auth;
