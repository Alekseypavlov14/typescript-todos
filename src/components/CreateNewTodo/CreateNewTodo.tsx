import { FC } from "react"
import './CreateNewTodo.module.css'

interface CreateNewTodoInterface {}

const CreateNewTodo: FC<CreateNewTodoInterface> = () => {
    return (
        <div className='CreateNewTodo Palette'>
            <input type="text" name="new-todo" />
        </div>
    )
}

export { CreateNewTodo }