import React from 'react'
import TodoListItem from './TodoListItem'


const TodoLists = props => {
  return (
    <ul className="list-items">
      { props.list.map(list => (
        <TodoListItem
          key={list.id}
          id={list.id}
          onDelete={props.onDeletelist}
        >
          {list.text}
        </TodoListItem>
      ))
      }
      lfdhl
    </ul>

  )
}

export default TodoLists
