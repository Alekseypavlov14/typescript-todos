import { FC } from "react"
import { TodoType } from "../../types/Todo.type"
import './CreateNewTodo.css'

interface CreateNewTodoInterface {
    addTodo: (todo: TodoType) => void
}

const CreateNewTodo: FC<CreateNewTodoInterface> = () => {
    return (
        <div className='CreateNewTodo Palette'>
            <input 
                type="text" 
                name="new-todo" 
                className="Form" 
                placeholder="Create new task ..."
            />
        </div>
    )
}

export { CreateNewTodo }