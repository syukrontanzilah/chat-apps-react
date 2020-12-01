import React from 'react'
import '../../styles/getStarted.scss'
import { BCKGGetStarted2, BCKGGetStarted1, BCKGGetStarted3 } from '../../assets/image'
import HeaderGS from './HeaderGS'
import CenterGS from './CenterGS'
import CenterOption from './CenterOption'
import FooterGS from './FooterGS'

const GetStarted = () => {
    return (
        <div className="get__started">
            <HeaderGS/>
                <img className="image__getStarted__bg" src={BCKGGetStarted2}/>
                <div className="open__landingpage">
                <p className="landing__openTitle">Best relieble ChatApps for any purpose</p>
                <p className="landing__openDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                <div className="button__container">
                    <div className="button__registerUser">Register as user</div>
                    <div className="button__registerRoom">Register as Room Admin</div>
                </div>
                </div>

                <CenterGS/>
                <CenterOption/>

                <div className="landing__organize">
                    <img className="bckg__footer" src={BCKGGetStarted3}/>
                    <div className="landing__organize__title">
                        <p className="landing__organize__titleGS">Easy organize your relation with ChatApps</p>
                        <p className="landing__organize__descGS">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                        <div className="button__try">
                            Try ChatApps Now
                        </div>
                    </div>
                </div>

                <FooterGS/>


        </div>
    )
}

export default GetStarted
