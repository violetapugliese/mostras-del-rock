import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Header from "../components/Header";
import Serch from "../components/Serch";
import Main from "../components/Main";
import Video from "../components/Video";
import VideoPlayer from "../components/VideoPlayer";
import VideoData from "../components/VideoData";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";
import ReactPlayer from "react-player";

import "../styles.css";

// const API = "http://localhost:3000/initialState";
const API = "https://violetapugliese.github.io/mdrAPIRest/db.json";

const App = () => {
  const data = useInitialState(API);
  return data.length === 0 ? (
    <h1>Loading</h1>
  ) : (

    <Router>
      <div className="app">
        <Header />
        <Serch />

        <Main>
          <Switch>
            <Route path="/:id">
              <Video />
            </Route>
            <Route path="/" exact>
              <Video />
            </Route>
          </Switch>

          {data.mdr.length > 0 && (
            <List>
              {data.mdr.map((item) => (
                <Link
                  to={`${item.id}`}
                  className="w-full flex items-center justify-center "
                >
                  <ListItem key={item.id} {...item} />
                </Link>
              ))}
            </List>
          )}
        </Main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
