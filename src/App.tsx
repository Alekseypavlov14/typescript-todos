import { CreateNewTodo } from './components/CreateNewTodo/index'
import { Todos } from './components/Todos/index'
import { TodoType } from './types/Todo.type'
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const todos: TodoType[] = []
    return todos
  })

  function addTodo(todo: TodoType) {
    setTodos(todos => {
      return todos.concat([todo])
    })
  }

  return (
    <div className="App">
      <header className='Header'>
        <div className="Title">TODO</div>
      </header>

      <CreateNewTodo addTodo={addTodo}/>

      <Todos todos={todos}/>
    </div>
  )
}

export default App
