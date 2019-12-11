import React, { useReducer } from 'react';
import { initialState, todoReducer} from '../reducers/TodoReducer';
import TodoContext from '../context/todoContext';



export default  (props) => {


    const [state, dispatch] = useReducer( todoReducer, initialState);

    
    const addTodo = (item) => {

        dispatch({type: "ADD_TODO", payload: item});
    
      }
      
      
       // change to completed todos 
      // 
      const todoCompleted = (todo) => {
      
      //  const newTodos = [...this.state.todos];
      dispatch({type: "COMPLETED",payload: todo })
    
      
      }
       
       
      
      
       // clear completed
      const deleteTodo = () => {
      
        dispatch({type: "DELETE_TODO"})
       
      };
      
    //   saveData = () => {
    //       window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
          
    //   }
      
    //   getData = () => {
        
    //     const dataRetrieved = JSON.parse(window.localStorage.getItem('todos'));
    //     this.setState({
    //       todos: dataRetrieved});
    //   }
      


    return(
        <TodoContext.Provider value = {{
            todos: state.todos,
            addTodo,
            todoCompleted,
            deleteTodo

        }}>
            {props.children}
        </TodoContext.Provider>


    )
}