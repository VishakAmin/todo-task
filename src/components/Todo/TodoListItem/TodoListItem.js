import React from 'react'
import Button from '../../UI/Button/Button'
import classes from "./TodoListItem.module.css"

const TodoListItem = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id)
  }

  const completeHandler = () => {
    props.onComplete(props.id)
  }

  
  return (
    <li className={classes.listItem}>
        {props.children}
        <div className={classes.button}> 
            <Button onClick={deleteHandler}>Delete</Button>
            <Button onClick={props.onDeletelist}>Update</Button>
            <Button onClick={completeHandler}>Complete</Button>                          
          </div>
    </li>
  )
}

export default TodoListItem
