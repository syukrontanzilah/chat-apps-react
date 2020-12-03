import React from 'react'
import {Avatar, Badge} from '@material-ui/core';
import '../../styles/LeftSide.scss'
// import { Badge } from '../atoms';

const ListContact = (props) => {
    return (
        <div 
        onClick={()=> alert("list contack")}
        className="listContact">
            <Avatar src={props.image}/>
            <div style={{
                // textOverflow:'ellipsis', 
                // whiteSpace:'nowrap', 
                // width:'50px'
                }} className="list__contactName list__room">
                <a className="name__contact">{props.name}</a>
                <small  className="last__message">{props.lastmessage}</small>
            </div>
            <div className="group__badge__date">
                <a className="date__badge__right">10.37</a>
                <div className="badge__wrap">
                <Badge badgeContent={props.badgeNumber} color="secondary"/>
                </div>
            </div>

          
        </div>
    )
}

export default ListContact
