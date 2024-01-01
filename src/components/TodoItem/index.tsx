import styles from './styles.module.css'
import { useTaskContext } from '../../utils/useTaskContext'

interface TodoItemProps {
  id: number
  text: string
  completed: boolean
}

export function TodoItem({ id, text, completed }: TodoItemProps) {
  const { toggleTask, deleteTask } = useTaskContext()

  return (
    <li className={styles.taskContainer}>
      <div className={styles.taskDescription}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTask(id)}
        />
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {text}
        </span>
      </div>

      <button onClick={() => deleteTask(id)}>Excluir</button>
    </li>
  )
}
