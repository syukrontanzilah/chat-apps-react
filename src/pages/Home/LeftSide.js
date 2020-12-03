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
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';

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
                    <small className="leftSide__username">Jhon Due</small>
                    <small className="leftSide__position">Super Admin</small>
                </div>
                <div className="more__leftsideUser" onClick={()=> alert('this is more')}>
                <MoreVert color="primary"/>
                </div>
            </div>

{/* TAB BAR */}
<div className="tab__contactAndRoom">
  <Tabs defaultActiveKey="all-room" id="uncontrolled-tab-example" variant="pils">
  <Tab eventKey="all-room" title="All Room">
      <div className="dropDown__leftSide">
          <a><ArrowDropDownIcon/> Your room</a>
          <div className="add__room" onClick={handleOpenAddRoom}>
            <AddIcon style={{fontSize: 14}}/>
              Add
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
      <div className="list__room__wrap">
          <ListRoom 
          image="https://mk0buildfireqbf86ll2.kinstacdn.com/wp-content/uploads/2017/04/how-not-to-get-screwed-by-app-developers.jpg" 
          room="Mob dev"
          badgeNumber={25}/>
          <ListRoom 
          image="https://www.cityskills.org/wp-content/uploads/2020/02/Piala-Dunia.jpg" 
          room="Sport"
          badgeNumber={1}/>
          <ListRoom image="https://lh3.googleusercontent.com/proxy/79QVPTTXqIPoAVC7pFKw3PMODH9IZla64dj1Z6NZ268l1g4umEtqtIqK3bXEvaeeVvNi4I6u9jbwxBZSwzVw72t5Rzn8_j3w8nmVa3mewPCHRrr35v6a8L4bYStBtUdNM3sjTheejk6Iz1GnHMuk-pzsuCFODQ" room="Development"/>
          <ListRoom image="https://digitalambition.co/wp-content/uploads/2018/06/freelance-web-developer.jpg" room="Android developer"
          badgeNumber={100}
          />
          <ListRoom 
          image="https://media.istockphoto.com/photos/dollars-in-100-bills-in-a-mans-hand-closeup-on-a-dark-background-picture-id1227594879" 
          room="Management Keuangan & Akuntansi"
          />
          <ListRoom room="PSSI" image="https://mk0buildfireqbf86ll2.kinstacdn.com/wp-content/uploads/2017/04/how-not-to-get-screwed-by-app-developers.jpg"/>
          <ListRoom room="Room OKE"  image="https://www.cityskills.org/wp-content/uploads/2020/02/Piala-Dunia.jpg"/>
          <ListRoom room="Penyiaran" image="https://digitalambition.co/wp-content/uploads/2018/06/freelance-web-developer.jpg"/>
          <ListRoom room="Book Store & Stationary"/>
      </div>
  </Tab>
  <Tab eventKey="message" title="Message">
    <div className="list__room__wrap">
        <ListContact name="Hendika" image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  lastmessage="Hallo lagi apa kamu" badgeNumber={2}/>
        <ListContact name="Azizah Assegaff" image="https://i.pinimg.com/564x/d1/e0/2e/d1e02eb46bdcbc7efab0338f24904f17.jpg" lastmessage="Iyah gue juga pengen ketemu loh nih kapan ya bisa nya?" />
        <ListContact name="Siti Hartinah Putri" image="https://i.pinimg.com/originals/84/46/13/844613f5ed5765f9db6904bd32c8ea59.jpg" lastmessage="thanks ya" badgeNumber={21}/>
        <ListContact name="Rizki permana" image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  lastmessage="Ok"/>
    </div>
  </Tab>
</Tabs>
</div>
        </div>
    )
}

export default LeftSide

