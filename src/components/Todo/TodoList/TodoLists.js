import React from 'react'
import Button from '../../UI/Button/Button'
import TodoListItem from '../TodoListItem/TodoListItem'
import classes from "./TodoList.module.css"

const TodoLists = props => {
  return (
    <ul className={classes.listItems}>
      { props.list.map(list => (
        <TodoListItem
          key={list.id}
          id={list.id}
          onDelete={props.onDeletelist
          }
        > 
        <div className={classes.items}>
          <div className={classes.text}>
            {list.text}            
          </div>
          <div className={classes.button}> 
            <Button onClick={props.onDeletelist}>Delete</Button>
            <Button onClick={props.onDeletelist}>Update</Button>
            <Button onClick={props.onDeletelist}>Complete</Button>                          
          </div>
        </div>

        </TodoListItem>
      ))
      }
      
    </ul>

  )
}

export default TodoLists
