import { FC } from "react"
import { TodoType } from "../../types/Todo.type"
import './CreateNewTodo.module.css'

interface CreateNewTodoInterface {
    addTodo: (todo: TodoType) => void
}

const CreateNewTodo: FC<CreateNewTodoInterface> = () => {
    return (
        <div className='CreateNewTodo Palette'>
            <input type="text" name="new-todo" />
        </div>
    )
}

export { CreateNewTodo }