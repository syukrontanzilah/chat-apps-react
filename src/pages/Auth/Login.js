import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios';
import {storeData} from '../../utils/localStorage';
import jwt_decode from 'jwt-decode';
import '../../styles/login.scss'
import {useDispatch} from 'react-redux'
import { Input } from '../../components';
import { LoginBCKG1, LoginBCKG2 } from '../../assets';


const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [email, setEmail] = useState("admin13@gmail.com")
    const [password, setPassword] = useState("123");
    const [loading, setLoading] = useState(false)

    const submitHandler = () => {
        setLoading(true)
        axios.post("http://192.168.0.123:3000/auth/login", {
            email,
            password
        }).then(res=>{
            console.log("data: ", res.data.accessToken)
            console.log("token login: ", res.data.accessToken);
            setLoading(false);
            storeData("token", res.data.accessToken);
            // history.push('/')
            dispatch({
              type:"LOGIN"
            })

            const token = res.data.accessToken
            var decode = jwt_decode(token)
            console.log(decode.id)
        }).catch(e => {
            console.log(e);
            setLoading(false)
        })
    }

    return (
        <div className="login">
          <img src={LoginBCKG2} className="bckg-top"/>
          <img src={LoginBCKG1} className="bckg-bottom"/>
          <div  className="login__div">
            
            <h1 className="login__title">Welcome back!</h1>
            <p>We're so exited to see you again!</p>
            <form>

              <Input
              label="Email"
              value={email}
              onChange ={e => setEmail(e.target.value)}
              type="email" 
              id="email"
              />

              <Input
              label="Password"
              value={password}
              onChange= {e => setPassword(e.target.value)}
              type="password" 
              id="password"
              />
              <div className="desc__button">
                <small id="forgot">Problems with your login ? <span className="register__span">Forgot Password</span></small>
              </div>
 

  <div className="button__login">
  <button  type="button" onClick={()=> submitHandler()} class="btn btn-primary">
    {loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>}
    Login
    </button>
  <small id="emailHelp" className="desc__button">Dont have account? <span className="register__span" onClick={()=>history.push('/register')}>Register</span></small>
  </div>

</form>

</div>
        </div>
    )
}

export default Login
