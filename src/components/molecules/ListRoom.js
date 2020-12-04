import React from 'react'
import {Avatar, Badge} from '@material-ui/core';
// import { Badge } from '../atoms';


const ListRoom = (props) => {
    return (
        <div
        onClick={props.onClick}
        className="listContact">
            <Avatar src={props.image}/>
            <div className="list__contactName list__room">
                {/* <a className="name__contact">{props.room.length < 12 ? `${props.room}` : `${props.room.substring(0,12)}...`}</a> */}
                <a className="name__contact">{props.name}</a>

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

export default ListRoom
