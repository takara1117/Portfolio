import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//各ページのインポート
import Home from "../parts/Home";
import Profile from "../parts/Profile";
import Hobby from "../parts/Hobby";
import ProsAndCons from "../parts/ProsAndCons";
import Skills from "../parts/Skills";
// import Future from "../parts/Future";

//cssのインポート
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <AppBar color="default" position="static">
        <Toolbar>
          <nav className="pc_nav">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/Profile">PROFILE</a>
              </li>
              <li>
                <a href="/Hobby">HOBBY</a>
              </li>
              <li>
                <a href="/ProsAndCons">PROS AND CONS</a>
              </li>
              <li>
                <a href="/Skills">SKILLS</a>
              </li>
              {/* <li>
                <a href="/Future">FUTURE</a>
              </li> */}
            </ul>
          </nav>
        </Toolbar>
      </AppBar>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Hobby" component={Hobby} />
          <Route path="/ProsAndCons" component={ProsAndCons} />
          <Route path="/Skills" component={Skills} />
          {/* <Route path="/Future" component={Future} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
