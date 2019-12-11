
export const initialState = { todos:[{
    
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589

}] }




export const todoReducer = (state, action) => {

    switch(action.type){
        
    case "ADD_TODO":
        return {
            todos: [...state.todos, {
            item: action.payload,
            id: Date.now(),
            completed: false
            }
        
            ]}
    case "COMPLETED":
            return {
                todos: [state.todos.map(each => {
                    if (each.id === action.payload.id)
                        return {...each, completed: !each.completed}
                    else return each
                })
                ] }

    case "DELETE_TODO":
        return {
         todos: state.todos.filter(each => !each.completed)}

    default:
            return state;
    }
    
}