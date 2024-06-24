import { createContext, useState } from "react"

export const TodoProvider = createContext()
const TodoContext = (props) => {
    // const [todos,setTodos] = useState([
    //     {
    //         id:1,
    //         title:"Complete Todo App on Frontend Mentor",
    //         completed: false
    //     }
    // ])

    // const [todoList,setTodoList] = useState(todos)

    const [theme,setTheme] = useState('dark')

    // const addNewTodo = (newTodo)=>{
    //     newTodo.id = todos.length+1
    //     setTodos([...todos,newTodo])
    //     console.log(todos)
    //     // setTodoList(todos)
    // }

    // const markAsRead = (id)=>{
    //     const markTodo = setTodos(todos.map(todo=>todo.id === id ? {...todo, completed: !todo.completed} : todo))
    //     setTodos(markTodo)
    // }

    // const deleteTodo = (id)=>{
    //     setTodos(todos.filter(todo=> todo.id !== id))
    //     // const filterTodo = setTodos(todos.filter(todo=> todo.id !== id))
    //     // setTodos(filterTodo)
    // }

    // const clearAllCompleteTodos = ()=>{
    //     setTodos(todos.filter(todo=>todo.completed !== true))
    // }

    // const filterTodo = (state)=>{
    //     switch(state){
    //         case "all":
    //             setTodoList(todos);
    //             break;
    //         case "active":
    //             const activeTodos = todos.filter(todo=>todo.completed === false)
    //             setTodoList(activeTodos);
    //             break;
    //         case "completed":
    //             const completedTodos = todos.filter(todo=> todo.completed === true)
    //             setTodoList(completedTodos)
    //             break;
    //         default: setTodoList(todos);
    //     }
    // }
  return (
    <>
        <TodoProvider.Provider value={{theme,setTheme,
            // addNewTodo,markAsRead,deleteTodo,clearAllCompleteTodos,
            // todoList,setTodoList,filterTodo
        }}>
            {props.children}
        </TodoProvider.Provider>
    </>
  )
}

export default TodoContext