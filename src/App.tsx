import { CreateNewTodo } from './components/CreateNewTodo/index'
import { deleteTodoByIdType } from './types/DeleteTodoById.type'
import { Todos } from './components/Todos/index'
import { TodoType } from './types/Todo.type'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // create todos state from localStorage or new TodoType[]
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]')
    const todos: TodoType[] = savedTodos
    return todos
  })

  // create add todo handler
  function addTodo(todo: TodoType) {
    setTodos(todos => {
      return todos.concat([todo])
    })
  }

  // create deleteTodoById: id => filter Todos
  const deleteTodoById: deleteTodoByIdType = id => {
    setTodos(todos => todos.filter(todo => todo._id !== id))
  }

  // on add or delete todo - save all to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <header className='Header'>
        <div className="Title">TODO</div>
      </header>

      <CreateNewTodo addTodo={addTodo} />

      <Todos deleteTodoById={deleteTodoById} todos={todos} />
    </div>
  )
}

export default App
