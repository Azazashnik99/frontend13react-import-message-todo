import { useState } from "react";

function ToDoForm({addTask}) {
    const [input,setInput] = useState('');

    const handlerChange = (e) =>{
        setInput(e.target.value)
    }
    
    const handlerSubmit = (e) =>{
        e.preventDefault()
        addTask(input)
        setInput('')
    }

    return(
        <form onSubmit={handlerSubmit}>
            <input type="text" 
            placeholder="Add task..."
            value={input}
            onChange={handlerChange}
            />
            <button>+</button>
        </form>
    )

}
  export default ToDoForm;
  