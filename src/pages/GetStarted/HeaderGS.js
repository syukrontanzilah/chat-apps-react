import React from 'react'
import '../../styles/getStarted.scss'
import { useHistory, Link} from 'react-router-dom'

const HeaderGS = () => {
    const history = useHistory()
    return (
        <div className="header__gs">
            <a onClick={()=> history.push("/get-started")} className="chat__apps__title">ChatApps</a>
            <div className="nav__right__gs">
                 <a onClick={()=> history.push("/why-us")} className="header__nav">Why Us</a>
            <a onClick={()=> history.push('/learn-more')} className="header__nav">Learn More</a>
            <a onClick={()=> history.push('/features')} className="header__nav">Features</a>
<div
onClick={()=> history.push('/login')}
className="button__nav__login">
    Login
</div>
            </div>
           

        </div>
    )
}

export default HeaderGS
