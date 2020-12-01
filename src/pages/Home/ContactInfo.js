import React from 'react'
import { Avatar } from '@material-ui/core'

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
                    <label className="rightSide__name">Jocelyn</label>
                    <small className="rightSide__user">@Jocelyn@gmail.com</small>
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
        <p>Room Member</p>
        <div className="add__roomMember">
            + Add
        </div>
    </div>
    <div className="wrap__imgGroup">
           <div className="wrap__img__group">
        <Avatar src="https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg"/>
        <Avatar src="https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg"/>
        <Avatar src="https://i.pinimg.com/originals/e4/04/e8/e404e8a18cb07541d6cdece1877f21d7.jpg"/>
    </div>
    <div className="integer__group">
        234
        >
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
