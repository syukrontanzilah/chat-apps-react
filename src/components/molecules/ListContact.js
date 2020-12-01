import React from 'react'
import {Avatar} from '@material-ui/core';
import '../../styles/LeftSide.scss'

const ListContact = (props) => {
    return (
        <div className="listContact">
            <Avatar src="https://previews.123rf.com/images/sevendeman/sevendeman1711/sevendeman171100006/90385266-head-shot-of-normal-face-asian-man-.jpg"/>
            <div className="list__contactName">
                <div className="name__date">
                <p className="name__contact">Jocelyne</p>
                {/* <p className="date__contact">2 Min ago</p> */}
                </div>
            <p className="last__message">Hey there...</p>   
            </div>

          
        </div>
    )
}

export default ListContact
