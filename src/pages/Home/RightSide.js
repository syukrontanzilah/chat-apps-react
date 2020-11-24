import React from 'react'
import '../../styles/RightSide.css'
import { Avatar, IconButton } from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined, Message, InsertEmoticon, Mic, Send} from '@material-ui/icons' 
import CloseIcon from '@material-ui/icons/Close';

const RightSide = () => {
    return (
        <div className="rightside">
            <div className="rightside__title">
<IconButton>
    <CloseIcon style={{color:'white'}}/>
</IconButton>
            <label className="rightside__desc">Contact Info</label>
            </div>
        </div>
    )
}

export default RightSide
