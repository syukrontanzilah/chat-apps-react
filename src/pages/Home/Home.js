import React from 'react'
import {TextField, Button, IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'
import '../../styles/home.css'
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
            {/* <h4>Chat page</h4>
            <div>
                <TextField variant="outlined" placeholder="Text a message"/>
                <IconButton color="primary">
    <SendIcon/>
</IconButton>
            </div> */}
        </div>
    )
}

export default Home
