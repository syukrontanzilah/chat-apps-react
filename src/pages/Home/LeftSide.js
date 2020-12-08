import React, {useState} from 'react'
import '../../styles/LeftSide.scss';
import {useSelector, useDispatch}from 'react-redux'
import { Avatar, IconButton } from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined, Message, InsertEmoticon, Mic, Send, } from '@material-ui/icons' 
import { Tab, Tabs } from "react-bootstrap";
import { ListContact, ListRoom, DialogAlert, CardUser } from '../../components/molecules';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom'
import { RoomDummy} from '../../assets';

const LeftSide = ({setChat}) => {
  const dispatch = useDispatch()
  const ContactDummy = useSelector(state => state.dataDummy)
    const [openRoom, setOpenRoom] = useState(false);
    const [openContact, setOpenContact] = useState(false)
    const [name, setName] = useState("");
    const [room, setRoom] = useState("")
    const [contact, setContact]= useState({
      name: "",
      status: "",
      image:"",
      lastmessage: '',
      badgeNumber: 0,
      date: '',
      description:''
    })
    const handleOpenAddRoom = () => {
        setOpenRoom(true)
    }
    const handleOpenAddContact = () => {
      setOpenContact(true)
    }
    const handleCloseRoom = () => {
        setOpenRoom(false)
    }
    const handleCloseContact = () => {
      setOpenContact(false)
    }

    const AddContact =() =>  {
      const data = [...ContactDummy, contact]
    dispatch({type:'ADD', data:contact})
    setOpenContact(false)
    }

    
    const handleChange=(e)=>{
      const name = e.target.name
      const value = e.target.value
      console.log(name, value)
      setContact({...contact, [name] : value  })
 }

    return (
        <div className="leftside">
            <p className="chatApps">ChatApps</p>

       <CardUser
       image="https://i0.wp.com/the-latest.news/wp-content/uploads/2020/10/108100-unboxing-the-official-mask-apple-designed-for-its-employees.jpg"
       name="John Alfian"
       desc="Super Admin"
       />

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
      <DialogAlert
      titleDialog="Create a room"
      open={openRoom}
      onClose={handleCloseRoom}
      onSubmit={handleCloseRoom}
      name="Room Name"
      desc="Description"
      titleButton="Create Room"
      placeholderName="Room Name"
      placeholderDesc="Description"
      // valueName=""
      // valueDesc=""
      // onChangeName={}
      // onChangeDesc={}
      />
      <div className="list__room__wrap">
   {
     RoomDummy.map((data)=> {
       return(
         <ListRoom
         onClick={()=> setChat({name: data.name, status: data.member, image: data.image})}
          name={data.name}
          image={data.image}
          badgeNumber={data.badgeNumber}
          date={data.date}
         />
       )
     })
   }
      </div>
  </Tab>
  <Tab eventKey="message" title="Message">
  <div className="dropDown__leftSide">
          <a><ArrowDropDownIcon/> Your Contact</a>
          <div className="add__room" onClick={handleOpenAddContact}>
            <AddIcon style={{fontSize: 14}}/>
              Add
          </div>
      </div>
      <DialogAlert
      titleDialog="Create a contact"
      open={openContact}
      onClose={handleCloseContact}
      onSubmit={AddContact}
      handleChange={handleChange}
      name="Name"
      name1="name"
      name2="lastmessage"
      desc="Description"
      titleButton="Create Contact"
      />

    <div className="list__room__wrap">
      {
        ContactDummy.map(data => {
          return(
            <ListContact 
            onClick={()=> setChat({name: data.name, status: data.status, image: data.image})}
            name={data.name}
            image={data.image}
            lastmessage={data.lastmessage}
            badgeNumber={data.badgeNumber}
            date={data.date}
            />
          )
        })
      }
    </div>
  </Tab>
</Tabs>
</div>
        </div>
    )
}

export default LeftSide;

