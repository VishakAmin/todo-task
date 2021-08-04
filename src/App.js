
import React,{useState} from 'react';
import './App.css';
import TodoInput from './components/Todo/TodoInput/TodoInput';
import TodoLists from './components/Todo/TodoList/TodoLists';

function App() {

  const [TodoList, setTodoList] = useState([
    {text:"Finish This app", id:"g1", completed: false}
  ])

  let todo = (
    <p style={{textAlign:"center"}}>No Todo Found. Can you add one?</p>
  )

  const addTodoList = (task) => {
    setTodoList(prevList => {
      const updatedList = [...prevList];
      updatedList.unshift({text:task, id: Math.random().toString(), completed: false })
      return updatedList;
    })
    console.log(TodoList);
  }

  const deleteTodolist = (id) => {
    setTodoList(prevList => {
      const updatedList = prevList.filter(list => list.id !== id);
      return updatedList
    })

  }

  const completedTodolist = (id) => {
      let completed = TodoList.map(list=>{
        return list.id === id ? { ...list, completed: !list.completed } : { ...list};
      })
      setTodoList(completed)
  }
  
  if (TodoList.length > 0) {
    todo = (
      <TodoLists list={TodoList} onDeletelist={deleteTodolist} onCompletedList ={completedTodolist} />
    )
  }

  return (
    <div >
      <section id="todolist-form">
        <TodoInput onAddTodo={addTodoList}/>
      </section>
      <section id="lists">
        {todo}
      </section>
    </div>
  );
}

export default App;
