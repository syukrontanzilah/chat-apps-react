import React from 'react'
import '../../styles/RightSide.scss'
import { Avatar, IconButton } from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined, Message, InsertEmoticon, Mic, Send} from '@material-ui/icons' 
import CloseIcon from '@material-ui/icons/Close';
import ContactInfo from './ContactInfo';

const RightSide = ({userChat}) => {
    // const {name, status, image, room} = userChat()
    return (
        <div className="rightside">
            <div className="rightside__title">
                <IconButton>
                    <CloseIcon style={{color:'white'}}/>
                </IconButton>
            <a className="rightside__desc">Contact Info</a>
            </div>

            {/* info desc */}
          <ContactInfo/>
        </div>
    )
}

export default RightSide
