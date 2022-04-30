import { FC, useEffect, useRef } from 'react'
import { TodoType } from '../../types/Todo.type'
import { initSwipe } from 'swipe-mobile'
import styles from './Todo.module.css'
import { deleteTodoByIdType } from '../../types/DeleteTodoById.type'

interface TodoInterface {
    todo: TodoType,
    deleteTodoById: deleteTodoByIdType
}

const Todo: FC<TodoInterface> = ({ todo, deleteTodoById }) => {
    const TodoRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (TodoRef.current instanceof HTMLDivElement) {
            const { rightSwiping, right } = initSwipe(TodoRef.current)

            rightSwiping(e => {
                if (e.target instanceof HTMLDivElement) {
                    e.target.style.transform = `translateX(${Math.floor(e.distance)}px)`
                }
            })

            right(e => {
                if (e.target instanceof HTMLDivElement) {
                    if (e.distance < 60) {
                        e.target.style.transform = 'translateX(0px)'
                    } else {
                        e.target.style.transform = `translateX(100%)`
                        deleteTodoById(Number(e.target.id))
                    }
                } 
            })
        }
    })

    return (
        <div ref={TodoRef} id={todo._id.toString()} className={styles.Todo}>
            {todo.content}
        </div>
    )
}

export { Todo }