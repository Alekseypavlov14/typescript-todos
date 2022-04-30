import { FC } from "react"
import { deleteTodoByIdType } from "../../types/DeleteTodoById.type"
import { TodoType } from './../../types/Todo.type'
import { Todo } from "../Todo/index"

interface TodosInterface {
    todos: TodoType[],
    deleteTodoById: deleteTodoByIdType
}

const Todos: FC<TodosInterface> = ({ todos, deleteTodoById }) => {
    return (
        <div className='Todos Palette'>
            {todos.map(todo => (
                <Todo 
                    deleteTodoById={deleteTodoById} 
                    todo={todo} 
                    key={todo._id}
                />
            ))}
        </div>
    )
}

export { Todos }