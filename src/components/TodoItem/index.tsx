import { useTaskContext } from '../../utils/useTaskContext'

interface TodoItemProps {
  id: number
  text: string
  completed: boolean
}

export function TodoItem({ id, text, completed }: TodoItemProps) {
  const { toggleTask, deleteTask } = useTaskContext()

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button onClick={() => deleteTask(id)}>Excluir</button>
    </li>
  )
}
