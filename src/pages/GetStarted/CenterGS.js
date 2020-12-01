import React from 'react';
import '../../styles/getStarted.scss'
import { BCKGGetStarted1 } from '../../assets/image';

const CenterGS = () => {
    return (
        <div className="center__GS">
            <div className="center__leftGS">
                <img className="img__centerGS" src={BCKGGetStarted1}/>
            </div>
            <div className="center__rightGS">
                <p className="landing__openTitle">Powerful, Efficient, and Simple ChatApps </p>
                <p className="landing__centerDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default CenterGS
