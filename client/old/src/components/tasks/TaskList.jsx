import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {getTodos, deleteTodo, markAsComplete, clearCompleted, getActive, getCompleted } from "../../features/todoSlice"
import Task from "./Task"
import './style.css'
import { stylesVariable } from '../../styles'
import { DndContext, closestCorners } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

const TaskList = () => {
    const dispatch = useDispatch()
    const [filter,setFilter] = useState('all')
    let todos

    switch(filter){
        case "all":
            todos = useSelector(getTodos);
            break;
        case "active":
            todos = useSelector(getActive)
            break;
        case "completed":
            todos = useSelector(getCompleted)
            break;
        default: todos = useSelector(getTodos);
    }

    // const handleDragEnd = (e)=>{
    //     const {active,over} = e
    //     if(active.id === over.id) return
    //     dispatch(handleDrag({active,over}))
    //     // const newTodo = dispatch(handleDrag({active,over}))
    //     // dispatch(setTodo(newTodo))
    // }

    return (
    <>
        <div className="todoList">
            <div className="content">
                <DndContext 
                // onDragEnd={handleDragEnd} 
                collisionDetection={closestCorners}>
                    <SortableContext items={todos} strategy={verticalListSortingStrategy}>
                        {todos.length > 0 ? todos.map(todo=>(
                            <Task key={todo.id} todo={todo} deleteTodo={deleteTodo} markAsComplete={markAsComplete}/>
                        )): (
                            <p className="empty-message" style={{color:stylesVariable.Fontcolors.mediumRegular}}>No todo...</p>
                        )}
                    </SortableContext>
                </DndContext>
            </div>
            <div className="todoInfo" 
                // style={{color: stylesVariable.Fontcolors.lightRegular}}
                >
                <span className="count">{todos.length === 1 ? `${todos.length} item left` : `${todos.length} items left`}</span>
                
                <div className="filter">
                    <span 
                        style={(filter === 'all') ? {color: stylesVariable.Fontcolors.primary} : null} 
                        onClick={()=>setFilter('all')}>All</span>
                    <span 
                        style={(filter === 'active') ? {color: stylesVariable.Fontcolors.primary} : null} 
                        onClick={()=>setFilter('active')} >Active</span>
                    <span 
                        style={(filter === 'completed') ? {color: stylesVariable.Fontcolors.primary} : null} 
                        onClick={()=>setFilter('completed')} >Completed</span>
                </div>
                
                <button onClick={()=>dispatch(clearCompleted())}>Clear completed</button>
            </div>
            
        </div>
        <div className="mobile-filter">
            <span 
                style={(filter === 'all') ? {color: stylesVariable.Fontcolors.primary} : null} 
                onClick={()=>setFilter('all')}>All</span>
            <span 
                style={(filter === 'active') ? {color: stylesVariable.Fontcolors.primary} : null} 
                onClick={()=>setFilter('active')} >Active</span>
            <span 
                style={(filter === 'completed') ? {color: stylesVariable.Fontcolors.primary} : null} 
                onClick={()=>setFilter('completed')} >Completed</span>
        </div>
    </>
  )
}

export default TaskList