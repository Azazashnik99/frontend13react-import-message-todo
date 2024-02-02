function ToDo({todo,removeTask,changeTask}) {

    return(
        <div className="item-todo">
            <div 
            className={todo.complete ? 'item-text strike' : 'item-text'} 
            onClick={() => changeTask(todo.id)}>
                {todo.task}
            </div>

            <div className="item-delete" 
            onClick={() => removeTask(todo.id)}>
            х
            </div>

        </div>
    )

}
  export default ToDo;
  