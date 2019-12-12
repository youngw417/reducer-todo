import React, { useState, useContext } from 'react'
import TodoContext from '../context/todoContext';

export default () => {
    const todoContext = useContext(TodoContext);

    const { addTodo, deleteTodo, saveData, getData } = todoContext;

    const [task, setTask] = useState('');
        
    

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(task);
        setTask('');
            
    }

    const handleChanges = (e) => {
      setTask(e.target.value)
          
    }

    const handleClick = (e) => {
        e.preventDefault();
        deleteTodo();

    }

    const handleClicktoSave = (e) => {
        e.preventDefault();
        saveData();
       
    }
    const handleClicktoRetrieve = () => {
        getData();
       
    }


        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='todo' placeholder='Enter your todo' value = {task} onChange={handleChanges}/>
                    <div>
                        <div className="btnDiv">
                            <button className="add" type='submit'>Add todo</button>
                            <button className="clear" onClick = {handleClick}>Clear Completed</button>
                        </div>
                        <div className="btnDiv">
                            <button className="save" onClick = {handleClicktoSave}>Save my todos</button>
                        <button className="retrieve" onClick = {handleClicktoRetrieve}>Get my todos</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        )
     }


