import { useState } from 'react'
import { CreateNewTodo } from './components/CreateNewTodo/index'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className='Header'>
        <div className="Title">TODO</div>
      </header>

      <CreateNewTodo />
    </div>
  )
}

export default App
