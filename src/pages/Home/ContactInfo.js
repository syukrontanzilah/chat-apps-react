import React from 'react'
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const Photo = () => {
    return (
        <div className="photo__andMultimedia">
<img className="photoMultimedia" src = "https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg"/>
        </div>
    )
}

const ContactInfo = () => {
    return (
        <div className="right__component">
            <div className="contact__rightInfo">
                <Avatar src="https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg"/>
                <div className="contact__rightName">
                    <a className="rightSide__name">Jocelyn</a>
                    <a className="rightSide__user">@Jocelyn@gmail.com</a>
                </div>
            </div>

{/* status  */}

            <div className="status__edit">
                <p>Status</p>
                <p className="status__edited">Edit</p>
            </div>
            <div className="status__rightside">
                Slow Respon nih
            </div>

{/* Room member */}
<div className="room__memberWrap">
    <div className="status__edit">
        <a>Room Member</a>
        <div className="add__roomMember">
        <AddIcon style={{fontSize: 14}}/>
            Add
        </div>
    </div>
    <div className="wrap__imgGroup">
           <div className="wrap__img__group">
        <Avatar src="https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg"/>
        <Avatar style={{marginLeft: -15,}} src="https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg"/>
        <Avatar style={{marginLeft: -15,}} src="https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg"/>
        <Avatar style={{marginLeft: -15,}} src="https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg"/>
        <Avatar style={{marginLeft: -15,}} src="https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg"/>
    </div>
    <div className="integer__group">
        234
        <ArrowForwardIosIcon style={{fontSize: 18}}/>
    </div>
    </div>
 
</div>



            <div className="photos__multimedia">
<p>Photos and Multimedia</p>
<div className="wrap__photo">
   <Photo/>
<Photo/>
<Photo/> 
<Photo/> 
<Photo/> 

</div>
            </div>

            <div className="photos__multimedia">
<p>Attachments</p>
<div className="how__to">
    <p className="pdf__howto">PDF</p>
    <p className="desc__howTo">How to draw.pdf</p>
</div>
<div className="how__to">
    <p className="pdf__howto yellow">DOC</p>
    <p className="desc__howTo">How to draw.docsx</p>
</div>
<div className="how__to">
    <p className="pdf__howto red">XLS</p>
    <p className="desc__howTo">How to draw.xls</p>
</div>
            </div>
        </div>
    )
}

export default ContactInfo
