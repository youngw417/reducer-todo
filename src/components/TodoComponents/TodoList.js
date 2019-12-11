// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Todo from './Todo';

import React, { useContext, useEffect } from 'react';

import TodoContext from '../context/todoContext';

function TodoList( ) {
    const todoContext = useContext(TodoContext);

    const { todos } = todoContext;
    // const [myCom, setMycom] = useState();

    // const completedItems = (another) => {
       
    //     // setMycom(another)

    //     todoCompleted(another)
       
    
    // const handleClick = () => {
    //         todoCompleted();
    //     }
 
    // useEffect(()=> {
        
        
    // },[myCom])

//    console.log('myCom', myCom)


    return (
        <div>
            <h3 style={{borderBottom:'2px solid black', width: '60%', marginLeft: '6rem' }}>My current todos....</h3>
            {
                todos.map(todo => (
                    
                    <Todo key = {todo.id} todo={todo} />
                )
                    )
            }
        </div>
    )
}

export default TodoList
