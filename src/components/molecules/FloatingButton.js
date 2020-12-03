import React from 'react';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Send } from '@material-ui/icons';
import { Container, Button, Link } from 'react-floating-action-button'
import '../../styles/Chat.scss'

const FloatingButton = () => {
  return (
    <div style={{backgroundColor:'lightblue'}} className="floating__button__attachfile">
         <Container>
            <Link href="#"
                tooltip="Create note link"
                // icon="far fa-sticky-note" 
                >
                  <AttachFile/>
                </Link>
            <Link href="#"
                tooltip="Add user link"
                // icon="fas fa-user-plus"
                >
                  <SearchOutlined/>
                </Link>
                <Link href="#"
                styles={{backgroundColor: 'green', color:'white'}}
                tooltip="Add user link"
                // icon="fas fa-user-plus"
                >
                  <SearchOutlined/>
                </Link>
            <Button
                styles={{backgroundColor: '#3866E5', color:'white', position:'relative'}}
                tooltip="Attach file"
                icon="fas fa-plus"
                rotate={true}
                // onClick={() => alert('FAB Rocks!')} 
                >
                  <AttachFile/>
                </Button>
        </Container>
    </div>
 
  )
}

export default FloatingButton
