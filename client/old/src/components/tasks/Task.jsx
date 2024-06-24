import { useContext } from 'react'
import iconCross from '../../assets/images/icon-cross.svg'
import { useDispatch } from 'react-redux'
import { stylesVariable } from '../../styles'
import { TodoProvider } from '../../context/TodoContext'
import { useSortable } from '@dnd-kit/sortable' 
import { CSS } from '@dnd-kit/utilities'

const Task = ({todo,deleteTodo,markAsComplete}) => {
  const {theme} = useContext(TodoProvider)
  const dispatch = useDispatch()

  const getStyles = () => {
    if (completed) {
      if (theme === 'light') {
        return { textDecoration: 'line-through', color: stylesVariable.Fontcolors.lightRegular };
      } else if (theme === 'dark') {
        return { textDecoration: 'line-through', color: stylesVariable.Fontcolors.darkRegular };
      }
    }
    return {};
  };


  const {id,title,completed} = todo
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  return (
    <div ref={setNodeRef} {...attributes} {...listeners}
     className='todoItem' style={style}>
      <div className="check-container">
        <label className="container">
          <input onClick={()=>dispatch(markAsComplete({id}))} type="checkbox" name="completed" id="completed" defaultValue={completed} defaultChecked={completed} />
          <span className="checkmark"></span>
        </label>
        {/* <p style={getStyles()}>{title}</p> */}

        <p style={(completed && theme === 'dark') ? {textDecoration: 'line-through', color: stylesVariable.Fontcolors.lightRegular} : ((completed && theme === 'light') ? {textDecoration: 'line-through', color: stylesVariable.Fontcolors.darkRegular} : null)}>{title}</p>
      </div>
      
      <button onClick={()=>dispatch(deleteTodo({id}))}>
        <img hidden src={iconCross} alt="delete image" />
      </button>
    </div>
    
  )
}

export default Task

{/* <div className="check-content">
        <div className="container">
          <input onClick={()=>dispatch(markAsComplete({id}))} className='check' type="checkbox" name="completed" id="completed" defaultValue={completed} defaultChecked={completed} />
          <span className='checkmark'> </span>
        </div>
          <p style={(completed) ? {textDecoration: 'line-through'} : null}>{title}</p>
      </div>
      <img src={iconCross} alt="delete image" onClick={()=>dispatch(deleteTodo({id}))}/> */}
    {/* </li> */}