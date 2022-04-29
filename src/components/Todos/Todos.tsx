import { FC } from "react"
import { Todo } from "../Todo/index"
import { TodoType } from './../../types/Todo.type'

interface TodosInterface {
    todos: TodoType[]
}

const Todos: FC<TodosInterface> = ({ todos, ...props }) => {
    return (
        <div className='Todos Palette'>
            {todos.map(todo => (
                <Todo todo={todo} key={todo._id}/>
            ))}
        </div>
    )
}

export { Todos }