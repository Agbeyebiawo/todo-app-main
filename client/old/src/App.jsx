import NewTask from "./components/new/NewTask"
import TaskList from "./components/tasks/TaskList"
import Header from "./components/header/Header"
import TodoContext from "./context/TodoContext"


function App() {
  return (
    <>
      <TodoContext>
        
        <div className="app-container">
          <Header />
          <NewTask />
          <TaskList />
          <p className="drag-info">Drag and drop to reorder list</p>
        </div>
      </TodoContext>
      
    </>
  )
}

export default App
