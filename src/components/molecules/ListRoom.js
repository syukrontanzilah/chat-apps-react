import React from 'react'
import {Avatar, Badge} from '@material-ui/core';
// import { Badge } from '../atoms';


const ListRoom = (props) => {
    return (
        <div
        onClick={()=> alert("this is list room")}
        className="listContact">
            <Avatar src={props.image}/>
            <div className="list__contactName list__room">
                <a className="name__contact">{props.room.length < 12 ? `${props.room}` : `${props.room.substring(0,12)}...`}</a>
            </div>
            <div className="group__badge__date">
                <a className="date__badge__right">2 week ago</a>
                <div className="badge__wrap">
                <Badge badgeContent={props.badgeNumber} color="secondary"/>
                </div>
            </div>

        </div>
    )
}

export default ListRoom
