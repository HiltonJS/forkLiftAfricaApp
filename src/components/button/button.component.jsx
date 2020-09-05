import React from 'react';


import "./button.css";

const Button = props=>(
    <button className={[
      'btn',
     
      `btn-${props.design}`
    ].join(' ') } 
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
      type={props.type}
    
    >{props.children} </button>

)
export default Button