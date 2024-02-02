// import Message from "./components/Message";
// import Input from "./components/Input";
import ToDo from "./todo-components/ToDo";
import ToDoForm from "./todo-components/ToDoForm";

import { useState } from "react";

function App() {

  const [todos,setTodos] = useState([]);

  const addTask = (input) => {
    if(input){
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: input,
        complete:false,
      }
      setTodos([...todos,newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const changeTask = (id) => {
    setTodos([
      ...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
      )
    ])
  }


  return (
    <div className="App">
      <header>
        <h1 className="hh">Количество задач № {todos.length}</h1>
      </header>
       {todos.map(todo => {
        return(
          <ToDo
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            changeTask={changeTask}
          />
        )
       })}
      <ToDoForm
        addTask={addTask}
      />
    </div>
  );
}

export default App;
