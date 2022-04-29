import React, { FC } from "react"

interface CreateNewTodoInterface {}

const CreateNewTodo: FC<CreateNewTodoInterface> = () => {
    return (
        <div>
            <input type="text" name="new-todo" />
        </div>
    )
}

export { CreateNewTodo }