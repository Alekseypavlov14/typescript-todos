import { useState } from 'react'
import './App.css'
import { CreateNewTodo } from './components/CreateNewTodo/CreateNewTodo'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header className='header'>
        <div className="title">TODO</div>
      </header>

      <CreateNewTodo />
    </div>
  )
}

export default App
