import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  let a = 0;
  const [promptLogin, setPromptLogin] = useState(false);
  const googleSuccessResponse = (res: any) => {
    var token = res.credential;
    setPromptLogin(true);
    var result = jwt_decode(res.credential);
    console.log("token: ", token);
    console.log("result: ", result);
    // document.getElementById("signInDiv").hidden = true;
  };
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "797847668640-m6hk2og01eor7qmr2iii2ml1sko9625q.apps.googleusercontent.com",
      callback: googleSuccessResponse,
    });
    {
      console.log(promptLogin);
      promptLogin === false && google.accounts.id.prompt();
    }
  }, []);

  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Navigate to="/posts" replace />} />
            <Route exact path="/posts" element={<Home />} />
            <Route exact path="/posts/search" element={<Home />} />
            <Route exact path="/posts/:id" element={<PostDetails />} />
            {!user ? (
              <Route exact path="/auth" element={<Auth />} />
            ) : (
              <Route exact path="/posts" element={<Home />} />
            )}
            {/* <Route
              exact
              path="/auth"
              element={() => (!user ? <Auth /> : <Navigate to="/posts" />)}
            /> */}
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
