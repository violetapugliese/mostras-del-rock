import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useState} from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import Video from "../components/Video";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
import searchIcon from "../assets/static/searchIcon.png";
import useInitialState from "../hooks/useInitialState";

import "../styles.css";

const API = "https://violetapugliese.github.io/mdrAPIRest/db.json";

function App(){

  const item = useInitialState(API);
  const [search, setSearch]= useState("");
  
  return item.length === 0 ? (
    <h1 className="text-white">Loading</h1>
  ) : (
    <Router>
      <div className="app">
        <Header /> 
        <div className=" xl:px-60 lg:px-24 md:px-40 lg:items-start flex justify-center items-center  mb-4">
            <input
            className=" w-5/6 h-8 text-md bg-black focus:outline-none myBorder text-white border-2 pl-4 rounded-l-full "
            type="text"
            value={search}
            placeholder="Buscar..."
            onChange={(event) => {setSearch(event.target.value);
            }}
          />
            <button className="flex hover:bg-green-500 justify-center w-1/6 h-8 bg-black focus:outline-none myBorder  text-white border-2 border-l-0 rounded-r-full ">
              <img src={searchIcon} className="self-center w-4" alt="lupa" />
            </button>
          </div>
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
            
              <List >
                {item.mdr.filter((item) => {
                  if (search == "") {
                    return item
                  } else if (item.name.toString().toLowerCase().includes(search.toLowerCase())){
                    return item
                  }
                }).map((item) => (
                  <Link
                    to={`${item.name}`}
                    key={item.id}
                    className="w-full flex items-center justify-center ">
                    <ListItem key={item.id} {...item} />
                  </Link>
                ))}
              </List>       
          </div>
        </Main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
