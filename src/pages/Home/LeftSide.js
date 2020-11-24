import React from 'react'
import '../../styles/LeftSide.css';
import { Avatar, IconButton } from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined, Message, InsertEmoticon, Mic, Send} from '@material-ui/icons' 
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const LeftSide = () => {
    return (
        <div className="leftside">
            <p className="chatApps">ChatApps</p>

            <div className="leftside__user">
                <Avatar src="https://i0.wp.com/the-latest.news/wp-content/uploads/2020/10/108100-unboxing-the-official-mask-apple-designed-for-its-employees.jpg"/>
                <div className="leftside__usernameWrap">
                    <p className="leftSide__username">Jhon Due</p>
                    <small className="leftSide__position">Super Admin</small>
                </div>
                <MoreVert color="primary"/>
            </div>

{/* TAB BAR */}

        </div>
    )
}

export default LeftSide







