import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined, Message, InsertEmoticon, Mic, Send, } from '@material-ui/icons' 

const CardUser = (props) => {
    return (
        <div className="leftside__user">
        <Avatar src={props.image}/>
        <div className="leftside__usernameWrap">
            <small className="leftSide__username">{props.name}</small>
            <small className="leftSide__position">{props.desc}</small>
        </div>
        <div className="more__leftsideUser" onClick={()=> alert('this is more')}>
        <MoreVert color="primary"/>
        </div>
    </div>
    )
}

export default CardUser
