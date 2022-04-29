import { FC } from "react"
import { TodoType } from "../../types/Todo.type"
import './CreateNewTodo.css'

interface CreateNewTodoInterface {
    addTodo: (todo: TodoType) => void
}

const CreateNewTodo: FC<CreateNewTodoInterface> = ({ addTodo, ...props}) => {
    function addTodoHandler(value: string) {
        addTodo({
            isDone: false,
            content: value,
            _id: Date.now()
        })
    }

    return (
        <div className='CreateNewTodo Palette' {...props}>
            <input 
                type="text" 
                name="new-todo" 
                className="Form" 
                placeholder="Create new task ..."
                onEnded={(e) => console.log(e)}
            />
        </div>
    )
}

export { CreateNewTodo }