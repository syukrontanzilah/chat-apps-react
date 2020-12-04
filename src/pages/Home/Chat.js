import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Send } from '@material-ui/icons';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import io from 'socket.io-client';
import '../../styles/Chat.scss';
import FloatingButton from '../../components/molecules/FloatingButton';

const socket = io.connect('http://localhost:4000')

const Chat = ({userChat}) => {
    const [message, setMessage] = useState("")
    const [pesan, setPesan] = useState([
        {
            pesan:'hai how are you ?',
            waktu:'10.10',
            user:'A',
            image:''
        },
        {
            pesan:'Halo',
            waktu:'10.11',
            user:'B', 
            image:''
        }, {
            pesan:'Halo',
            waktu:'10.11',
            image:'https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg',
            user:'A'
        }, 
    ])

    // CONTOH
    // const [state, setStaet] = useState({ pesannya: '', nama: '' })
    // const [chat, setChat] = useState([])
    // useEffect(() => {
    //     socket.on('message', ({ nama, pesannya }) => {
    //       setChat([...chat, { nama, pesannya }])
    //     })
    //   })
    
    //   const onTextChange = e => {
    //     setStaet({ ...state, [e.target.nama]: e.target.value })
    //   }
    
    //   const onMessageSubmit = e => {
    //     e.preventDefault()
    //     const { nama, pesannya } = state
    //     socket.emit('message', { nama, pesannya })
    //     setStaet({ pesannya: '', nama })
    //   }
    
    //   const renderChat = () => {
    //     return chat.map(({ nama, pesannya }, index) => (
    //       <div key={index}>
    //         <h3>
    //           {nama}: <span>{pesannya}</span>
    //         </h3>
    //       </div>
    //     ))
    //   }
      //END CONTOH


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
 
    const {name, status, image, room} = userChat

    return (
        <div className="chat__page">
            {/* CHAT HEADER */}
            <div className="chat__header">
                <div className="chat__user">
                    <Avatar src={image}/>
                    <div className="chat__username">
                        <label className="user__name">{name}</label>
                        <small className="last__online">{status}</small>
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

  <div className="feed__dateChat">
<div className="feed__date">
  Today
</div>
  </div>

{/* chat me */}
{pesan.map((data, index) => {
    if(data.user === "A"){
return (
    <React.Fragment key={index}>
    <div className="chat__messageMe">
    {data.image &&
                (<div>
                <img className="image__send" src={data.image}/>
              </div>)
                }
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
                {data.image &&
                (<div>
                <img className="image__send" src={data.image}/>
              </div>)
                }
        <small className="text__messageOther">{data.pesan}</small>
    </div>
    <div className="chat__dateWrapOther">
        <small className="chat__date">{data.waktu}</small>
    </div>

        </React.Fragment>
        )}
})}

{/* image chat */}
{/* <div className="chat__messageOther">
<div>
  <img className="image__send" src="https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg"/>
</div>
<small className="text__messageOther">hallo look at picts i send you</small>
</div>
<div className="chat__dateWrapOther">
        <small className="chat__date">12.00</small>
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

               <div className="floating__button__attachfile">
               <FloatingButton/>
               </div>
               {/* <IconButton>
                <AttachFile onClick={() =>{}}/> 
               </IconButton> */}
                    <form onSubmit={(e) => onSendMessage(e)}>
                        <input
                        placeholder="Type a message"
                        type="text"
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        />
                    </form>

                <IconButton
                disabled={message ? false:true}
                style={{backgroundColor: message.length > 0 ? 'lightgray' : 'transparent'}}
                onClick={onSendMessage}
                type="submit"
                >
                <Send style={{color: message.length > 0 ? 'blue' : 'gray'}}/> 
               </IconButton>

</div>

        </div>
    )
}

export default Chat
