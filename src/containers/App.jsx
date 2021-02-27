import React, { useState, useEffect } from "react";
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
import "../styles.css";

const API = "http://localhost:3000/initialState";

const App = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <div className="">
      <Header />
      <Serch />

      <Main>
        <Video>
          <VideoPlayer />
          <VideoData />
        </Video>

        {initialState.mdr.length > 0 && 
          <List>
            {initialState.mdr.map((item) => (
              <ListItem key={item.id} {...item} />
            ))}
          </List>
        }

      </Main>
      <Footer />
    </div>
  );
};

export default App;
