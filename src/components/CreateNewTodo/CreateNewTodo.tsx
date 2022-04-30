import { FC, useState } from "react"
import { TodoType } from "../../types/Todo.type"
import './CreateNewTodo.css'

interface CreateNewTodoInterface {
    addTodo: (todo: TodoType) => void
}

const CreateNewTodo: FC<CreateNewTodoInterface> = ({ addTodo }) => {
    const [value, setValue] = useState('')

    function addTodoHandler(value: string) {
        addTodo({
            isDone: false,
            content: value,
            _id: Date.now()
        })
    }

    return (
        <div className='CreateNewTodo Palette'>
            <input 
                type="text" 
                name="new-todo" 
                className="Form" 
                placeholder="Create new task ..."
                autoComplete="off"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key !== 'Enter') return
                    if (!value.trim()) return
                    addTodoHandler(value)
                    setValue('')
                }}
            />
        </div>
    )
}

export { CreateNewTodo }