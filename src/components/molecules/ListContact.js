import React from 'react'
import {Avatar, Badge} from '@material-ui/core';
import '../../styles/LeftSide.scss'
// import { Badge } from '../atoms';

const ListContact = (props) => {
    return (
        <div 
        onClick={props.onClick}
        className="listContact">
            <Avatar src={props.image}/>
            <div style={{
                // textOverflow:'ellipsis', 
                // whiteSpace:'nowrap', 
                // width:'50px'
                }} className="list__contactName list__room">
                <a className="name__contact">{props.name}</a>
                <small  className="last__message">{props.lastmessage.length < 25 ? `${props.lastmessage}` : `${props.lastmessage.substring(0,25)}...`}</small>
            </div>
            <div className="group__badge__date">
            <a className="date__badge__right">{props.date}</a>
                <div className="badge__wrap">
                <Badge badgeContent={props.badgeNumber} color="secondary"/>
                </div>
            </div>
        </div>
    )
}

export default ListContact
