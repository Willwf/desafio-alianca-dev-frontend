import { useTaskContext } from '../../utils/useTaskContext'
import { TodoForm } from '../TodoForm'
import { TodoItem } from '../TodoItem'

export function TodoList() {
  const { tasks } = useTaskContext()

  return (
    <div>
      <h2>Tarefas</h2>
      <TodoForm />

      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
          />
        ))}
      </ul>
    </div>
  )
}
