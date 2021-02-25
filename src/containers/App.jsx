import React from 'react';
import Header from '../components/Header'
import Serch from '../components/Serch'
import Main from '../components/Main'
import Video from '../components/Video'
import VideoPlayer from '../components/VideoPlayer'
import VideoData from '../components/VideoData'
import '../styles.css';

const App = () => (
    <div className="bg-black">
        <Header />
        <Serch />
        
        <Main>
            <Video>
                <VideoPlayer/>
                <VideoData/>
            </Video>
        </Main>
    </div>
);

export default App;