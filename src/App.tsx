import { useState } from 'react'
import { CreateNewTodo } from './components/CreateNewTodo/index'
import './App.css'
import { Todos } from './components/Todos/index'

function App() {
  return (
    <div className="App">
      <header className='Header'>
        <div className="Title">TODO</div>
      </header>

      <CreateNewTodo />

      <Todos />
    </div>
  )
}

export default App
