import React, {useState} from 'react'
import '../../styles/LeftSide.scss';
import { Avatar, IconButton } from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined, Message, InsertEmoticon, Mic, Send, } from '@material-ui/icons' 
import { Tab, Tabs } from "react-bootstrap";
import { ListContact, ListRoom } from '../../components/molecules';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Input from '../../components/atoms/Input';
import CameraAltIcon from '@material-ui/icons/CameraAlt'



const LeftSide = () => {
    const [open, setOpen] = useState(false);
    const handleOpenAddRoom = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
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
<div className="tab__contactAndRoom">
  <Tabs defaultActiveKey="all-room" id="uncontrolled-tab-example" variant="pils">
  <Tab eventKey="all-room" title="All Room">
      <div className="dropDown__leftSide">
          <p>Yoour Room</p>
          <div className="add__room" onClick={handleOpenAddRoom}>
              +Add
          </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Create a room"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
           <div className="createRoom__form">
              <IconButton>
                  <CameraAltIcon fontSize="large"/>
              </IconButton>
               <div className="createRoom__formInput">
                   <Input label="Room Name"/>
                   <Input label="Description"/>

               </div>
           </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Create Room
          </Button>
        </DialogActions>
      </Dialog>
   <ListRoom/>
   <ListRoom/>
   <ListRoom/>
   <ListRoom/>
   <ListRoom/>
   <ListRoom/>
   <ListRoom/>
   <ListRoom/>
   <ListRoom/>

  </Tab>
  <Tab eventKey="message" title="Message">
   <ListContact/>
   <ListContact/>
   <ListContact/>
   <ListContact/>
  </Tab>

</Tabs>
</div>



        </div>
    )
}

export default LeftSide







