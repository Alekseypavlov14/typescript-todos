import { FC } from "react"
import { TodoType } from './../../types/Todo.type'

interface TodosInterface {
    todos: TodoType[]
}

const Todos: FC<TodosInterface> = ({ todos, ...props}) => {
    return (
        <div className='Todos Palette'>
            {todos.map(todo => (
                <div>{todo.content}</div>
            ))}
        </div>
    )
}

export { Todos }