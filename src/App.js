import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';
import TodoState from './components/states/TodoState';


// const todos = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   },
//   {
//     task: 'clean dishes',
//     id: 152881707723232,
//     completed: true
//   },
//   {
//     task: 'trash Cookies',
//     id: 15288170843422,
//     completed: false
//   }
// ];
  

const App = () => {
 



// saveData = () => {
//     window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
    
// }

// getData = () => {
  
//   const dataRetrieved = JSON.parse(window.localStorage.getItem('todos'));
//   this.setState({
//     todos: dataRetrieved});
// }


  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
    return (

      <TodoState>
        <div>
        <h1>Welcome to your Todo App!</h1>
        <dir className='grid-2'>
          <dir className="grid-left">
            <TodoForm />
          </dir>
          <dir className="grid-right">
            <TodoList />
          </dir>
        </dir>
        
      </div>
      </TodoState>
      
    )

    }
export default App;
