import React,{useState} from 'react'

import classes from  "./TodoInput.module.css"

const TodoInput = (props) => {

  const [inputValue, setInputValue] = useState("");

  const todoInputChangeHandler = (e) => {
    setInputValue(e.target.value)
  }
  
  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddTodo(inputValue)
    console.log(inputValue);

  }
  
  return (
    <form onSubmit={formSubmitHandler}>
        <div className={classes.formControl}>
          <label>Enter Todo</label>
          <input type="text"  onChange={todoInputChangeHandler}/>
       </div>
       <button type="submit"> Add </button>
    </form>
  )
}

export default TodoInput
