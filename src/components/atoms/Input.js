import React from 'react'
import '../../styles/input.scss'

const Input = (props) => {
    return (
        <div class="form-group">
            <div className="label__div">
                  <label for="label">{props.label}</label>
            </div>
      
        <input 
        value = {props.value}
        onChange ={props.onChange}
        type={props.type} 
        class="form-control" 
        id={props.id} 
        aria-describedby="input"
        placeholder={props.placeholder}/>

        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
    )
}

export default Input
