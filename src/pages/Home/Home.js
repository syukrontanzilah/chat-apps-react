import React from 'react'
import {TextField, Button, IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'
import '../../styles/home.scss'
import LeftSide from './LeftSide';
import Chat from './Chat';
import RightSide from './RightSide';
 
const Home = () => {
    return (
        <div className="home">

            <div className="home__body">
                <LeftSide/>
                <Chat/>
                <RightSide/>
            </div>
        </div>
    )
}

export default Home
