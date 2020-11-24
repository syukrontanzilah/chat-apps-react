import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios';
import {storeData} from '../../utils/localStorage';
import jwt_decode from 'jwt-decode';
import '../../styles/login.css'
import { Input, Header  } from '../../components';
import '../../styles/register.css'
import { LogoRegister, LogoRegister2 } from '../../assets';


const Register = () => {
    const history = useHistory();
    const [email, setEmail] = useState('admin1@gmail.com');
    const [password, setPassword] = useState('123');
    const [rePassword, setRePassword] = useState('123')
    const [username, setUsername] = useState('admin');
    const [loading, setLoading] = useState(false)

    const submitHandler = () => {
        setLoading(true);
        axios.post("http://192.168.0.123:3000/register", {
            email,
            password,
            username
        }).then(res => {
            console.log("data: ", res)
            console.log("token reg", res.data.token);
            setLoading(false);
            storeData("token =>", res.data.token);
            history.push('/login');

            const token = res.data.token
            var decode = jwt_decode(token);
            console.log(decode)
        }).catch(e => {
            console.log(e);
            setLoading(false)
        })
    }

    return (
        <div className="register">
        <Header/>

            <div className="register__page">

<div className="logo__div">
<img src={LogoRegister2} className="logo__register"/>
</div>


<div className="register__form">
<h2 className="register__title">Register as Room Admin</h2>
        <p>Lorem ipsum door sit amet, consesture adipiscing elit</p>
        <form>

            <Input 
            label="Name"
            id="username"
            type="username"
            value={username}
            onChange ={e => setUsername(e.target.value)}
            />

            <Input 
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange ={e => setEmail(e.target.value)}
            />

            <Input 
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange ={e => setPassword(e.target.value)}
            />

            <Input 
            label="Re-enter your password"
            id="password"
            type="password"
            value={password}
            onChange ={e => setPassword(e.target.value)}
            />

<button type="button" onClick={()=> submitHandler()} class="btn btn-primary">
{loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>}
Register
</button>
<div className="desc__account">
<small id="emailHelp" class="form-text text-muted">Already have an account? </small>
    <p>{" "}</p>
<Link to="/"> {" "}Login</Link>
</div>

</form>
</div>
       
</div>
    </div>
    )
}

export default Register

