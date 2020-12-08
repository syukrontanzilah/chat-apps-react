import React, {useState} from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Input from '../atoms/Input';
import CameraAltIcon from '@material-ui/icons/CameraAlt'
import { Avatar, IconButton } from '@material-ui/core'

const DialogAlert = (props) => {
    return (
        <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.titleDialog}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {/* lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum */}
           <div className="createRoom__form">
            
               <div className="createRoom__formInput">
                   <Input 
                   placeholder={props.placeholderName}
                   label={props.name}
                   value={props.valueName}
                   type="text"
                  //  name="name"
                  name={props.name1}
                   onChange={props.handleChange}
                   />
                   
                   <Input 
                   placeholder={props.placeholderDesc}
                   label={props.desc}
                   value={props.valueDesc}
                   type="text"
                  //  name="lastmessage"
                  name={props.name2}
                   onChange={props.handleChange}
                   />
               </div>  
               <IconButton>
                  <CameraAltIcon fontSize="large"/>
              </IconButton>
           </div>
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={props.onSubmit} color="primary" variant="outlined">
            {props.titleButton}
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default DialogAlert

