import React from "react";
import NavBar from "./components/navBar/navBar";
import Landing from "./Landing/landing.js";
import { About } from "./AboutUs/about";
import Services from "./Services/service.js";
import Login from "./User/user";
import ErrorPage from "./404/404";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Popup from "./popup/popup.js";
import Profile from "./profile/profile";
import MessageDisplay from "./message/message";

// create a function to check a cookie for profile page
const checkCookie = () => {
  if (document.cookie) {
    // get cookie
    const cookie = document.cookie.split("=")[1];
    if (cookie.includes("true")) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/users/login">
              {checkCookie() ? (
                <Popup url={`${process.env.REACT_APP_URL}/users/profile`}>
                  you are alrealdy logged in,
                  <br /> you are being sent to profile
                </Popup>
              ) : (
                <Login />
              )}
            </Route>
            <Route exact path="/popup">
              <Popup url={`${process.env.REACT_APP_URL}`}>
                your message has been submitted. <br /> we will get back to you
                shortly!
              </Popup>
            </Route>
            <Route exact path="/users/profile">
              {checkCookie() ? (
                <Profile />
              ) : (
                <Popup url={`${process.env.REACT_APP_URL}`}>
                  You do not have authorisation to view this
                </Popup>
              )}
            </Route>

            <Route exact path="/message/:id" children={<MessageDisplay />} />

            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
