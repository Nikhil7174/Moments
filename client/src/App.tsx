import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Auth from "./components/Auth/Auth";

function App() {
  const [user, setUser] = useState({});
  const handleCallbackResponse = (response: any) => {
    console.log("Encoded jwt token", response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    document.getElementById("signInDiv").hidden = true;
  };
  const handleSignOut = (event) => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  };
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "797847668640-m6hk2og01eor7qmr2iii2ml1sko9625q.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Container maxWidth="lg">
          <div id="signInDiv"></div>
          {Object.keys(user).length != 0 && (
            <button onClick={(e) => handleSignOut(e)}></button>
          )}
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/auth" element={<Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
