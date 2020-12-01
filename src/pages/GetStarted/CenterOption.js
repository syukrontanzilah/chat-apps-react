import React from 'react'
import '../../styles/getStarted.scss'
import { IconChat, IconGroup, IconCreate } from '../../assets/image'

const Card = (props) => {
    return (
        <div className="card__option">
            <img className="img__option" src={props.image}/>
    <p className="centerOption__title">{props.title}</p>
<p className="centerOption__desc">{props.desc}</p>
        </div>
    )
}

const CenterOption = () => {
    return (
        <div className="center__option">
           <Card image={IconCreate} title="Create or join any chat room" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
           <Card image={IconGroup} title="Invite anyone to chat room" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
           <Card image={IconChat} title="Easily manage your chat room" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
        </div>
    )
}

export default CenterOption
