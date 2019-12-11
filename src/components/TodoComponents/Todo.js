import React, { useContext } from 'react';

import TodoContext from '../context/todoContext';

function Todo({todo}) {
    // eslint-disable-next-line no-lone-blocks

    const todoContext = useContext(TodoContext);

    const { todoCompleted } = todoContext;

    const handleClick = ()=> {
        todoCompleted(todo);
    
       

    }
    
    return (
        <div>
          <p onClick = {handleClick} className ={todo.completed && 'completed' }>
              {todo.item} {':'} {Date(todo.id).toString().substring(0,15)}
         </p>  
        </div>
    )
}

export default Todo
