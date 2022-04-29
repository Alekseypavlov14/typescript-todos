import { FC } from 'react'
import { TodoType } from '../../types/Todo.type'
import styles from './Todo.module.css'

interface TodoInterface {
    todo: TodoType
}

const Todo: FC<TodoInterface> = ({ todo, ...props }) => {
    return (
        <div className={styles.Todo} {...props}>
            {todo.content}
        </div>
    )
}

export { Todo }