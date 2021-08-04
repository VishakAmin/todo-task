import React from 'react'
import classes from "./TodoListItem.module.css"

const TodoListItem = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id)
  }
  return (
    <li onClick={deleteHandler} className={classes.listItem}>
        {props.children}
    </li>
  )
}

export default TodoListItem
