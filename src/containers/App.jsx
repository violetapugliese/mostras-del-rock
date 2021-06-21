import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "../components/Header";
import Serch from "../components/Serch";
import Main from "../components/Main";
import Video from "../components/Video";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";

import "../styles.css";

const API = "https://violetapugliese.github.io/mdrAPIRest/db.json";

const App = () => {

  const data = useInitialState(API);

  return data.length === 0 ? (
    <h1 className="text-white">Loading</h1>
  ) : (
    <Router>
      <div className="app">
        <Header />

        <Main>
          <Switch>
            <Route path="/:name">
              <Video />
            </Route>
            <Route path="/" exact>
              <Video />
            </Route>
          </Switch>

          <div className="flex flex-col items-center justify-between h-full">
            <Serch />
            {data.mdr.length > 0 && (
              <List key="">
                {data.mdr.map((item) => (
                  <Link
                    to={`${item.name}`}
                    key={item.id}
                    className="w-full flex items-center justify-center ">
                    <ListItem key={item.id} {...item} />
                  </Link>
                ))}
              </List>
            )}
          </div>
        </Main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
