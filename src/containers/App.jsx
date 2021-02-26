import React from 'react';
import Header from '../components/Header'
import Serch from '../components/Serch'
import Main from '../components/Main'
import Video from '../components/Video'
import VideoPlayer from '../components/VideoPlayer'
import VideoData from '../components/VideoData'
import List from '../components/List'
import ListItem from '../components/ListItem'
import Footer from '../components/Footer'
import '../styles.css';

const App = () => (
    <div className="bgImg">
        <Header />
        <Serch />
        
        <Main>
            <Video>
                <VideoPlayer/>
                <VideoData/>
            </Video>
            <List>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </List>
        </Main>
        <Footer/>
    </div>
);

export default App;