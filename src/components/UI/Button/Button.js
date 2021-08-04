import React from 'react'
import classes from "./Button.module.css"


const Button = ({type, onClick, children}) => {
  return (
    <div>
        <button type={type} onClick={onClick} className={classes.button}>
            {children}
        </button>
    </div>
  )
}

export default Button
