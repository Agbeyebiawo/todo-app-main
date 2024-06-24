import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addNewTodo } from "../../features/todoSlice"
import './style.css'
import { stylesVariable } from "../../styles"
 
const NewTask = (props) => {
    const [title,setTitle] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(title === ''){
            return
        }
        dispatch(addNewTodo({title}))
        setTitle('')
    }
  if(!props.state)
  return (
    <form action="" onSubmit={e=>handleSubmit(e)} className="todoForm">
        <label class="container">
            <input type="checkbox"  disabled/>
            <span className="checkmark"></span>
        </label>
        <input style={{color: stylesVariable.Fontcolors.mediumRegular,
            fontSize: stylesVariable.fontFace.fontSize,
            caretColor: stylesVariable.Fontcolors.primary
        }} type="text" name="todo" id="todo" value={title} placeholder="Create a new todo..." onChange={e=>setTitle(e.target.value)} className="input"/>
    </form>
  )
}

export default NewTask