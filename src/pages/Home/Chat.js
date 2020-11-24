import React, {useState, useEffect, useRef} from 'react'
import '../../styles/Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined, Message, InsertEmoticon, Mic, Send,} from '@material-ui/icons' 
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ScrollToBottom from 'react-scroll-to-bottom'
import io from 'socket.io-client'

const Chat = () => {
    const [message, setMessage] = useState("")
    const [pesan, setPesan] = useState([
        {
            pesan:'hai how are you ?',
            waktu:'10.10',
            user:'A'
        },
        {
            pesan:'Halo',
            waktu:'10.11',
            user:'B'
        }
    ])

    const onSendMessage =(e) => {
        e.preventDefault();
        const pesanBaru = {
            pesan:message,
            waktu:'10.12',
            user:'A'
        }
        if(message.length === 0){
            alert("no message")
        } else {
            setPesan([...pesan, pesanBaru])   
            console.log("pesan saya: ", pesanBaru)
            setMessage("")
        }
    }
    
    useEffect(()=> {

    },[])
 
    // const sendMessage = (e) => {
    //     e.preventDefault();
        
    //     const data = {
    //         idChat : "",
    //         message : message
    //     }
    //     // setChatData(data)
    //     console.log(data)
    //     setMessage("")
    //     console.log('your message: ', message)
    // }

    return (
        <div className="chat__page">
            {/* CHAT HEADER */}
            <div className="chat__header">
                <div className="chat__user">
                    <Avatar src="https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg"/>
                    <div className="chat__username">
                        <label className="user__name">Jocelyn</label>
                        <small className="last__online">Active now</small>
                    </div>
                </div>
                <div className="search__menu">
                <IconButton>
                <SearchOutlined/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
                </div>
            </div>

{/* CHAT BODY */}
<ScrollToBottom className="chat__body">
<div className="chat__wrap">

{/* chat me */}
{pesan.map((data, index) => {
    if(data.user === "A"){
return (
    <React.Fragment key={index}>
    <div className="chat__messageMe">
        <small className="text__messageMe">{data.pesan}</small>
    </div>
    <div className="chat__dateWrap">
    <small className="chat__date">{data.waktu}{" "}</small>
        <DoneAllIcon fontSize="small" style={{color: '#828282'}}/>
    </div>
    </React.Fragment>
)
    } else {
        return(
        <React.Fragment>
            <div className="chat__messageOther">
        <small className="text__messageOther">{data.pesan}</small>
    </div>
    <div className="chat__dateWrapOther">
        <small className="chat__date">{data.waktu}</small>
    </div>

        </React.Fragment>
        )}
})}
  

    {/* chat other */}    
        {/* chat other */}
        {/* <div className="chat__messageOther">
        <small className="text__messageOther">How are you ?</small>
    </div>
    <div className="chat__dateWrapOther">
    <small className="chat__date">10:14AM</small>
    </div> */}
    {/* <div>
    {message}
    </div> */}

</div>
</ScrollToBottom>

{/* CHAT FOOTER */}
<div className="chat__footer">
                <IconButton>
                <InsertEmoticon/> 
               </IconButton>
               <IconButton>
                <AttachFile/> 
               </IconButton>

<form>
    <input
    placeholder="Type a message"
    type="text"
    onChange={e => setMessage(e.target.value)}
    value={message}
    />
</form>

                <IconButton
                onClick={onSendMessage}
                type="submit"
                >
                <Send/> 
               </IconButton>

</div>

        </div>
    )
}

export default Chat
