import React from 'react'
import {TextField, Button, IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'
import '../../styles/home.scss'
import '../../styles/Chat.scss'
import LeftSide from './LeftSide';
import Chat from './Chat';
import RightSide from './RightSide';

 
const Home = () => {
    const [chat, setChat] = React.useState(null)
    return (
        <div className="home">
            <div className="home__body">
                <LeftSide setChat={setChat}/>
                {chat !== null ?
                <Chat  userChat={chat}/> : 
                <div className="chat__page empty__chat">
                    <img className="image__emptyChat" src="https://images.assetsdelivery.com/compings_v2/jemastock/jemastock1908/jemastock190816596.jpg"/>
                    You have an empty chat
                    </div>
                }
                <RightSide/>
            </div>
        </div>
    )
}
export default Home
