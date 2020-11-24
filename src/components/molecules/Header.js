import React from 'react'
import '../../styles/Header.css'
import {useHistory} from 'react-router-dom'


const Header = () => {
const history = useHistory()
    return (
        <div className="header__register">
           <p className="nav__title main" onClick={()=> {}}>ChatApp</p> 
           <p className="nav__title" onClick={()=> history.push('/why-us')}>Why Us</p>
           <p className="nav__title" onClick={()=> history.push('/learn-more')}>Learn More</p>
           <p className="nav__title">Features</p>
        </div>
    )
}

export default Header
