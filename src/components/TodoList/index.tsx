import styles from './styles.module.css'
import { useTaskContext } from '../../utils/useTaskContext'
import { TodoForm } from '../TodoForm'
import { TodoItem } from '../TodoItem'

export function TodoList() {
  const { tasks } = useTaskContext()

  const sortedTasks = tasks
    .slice()
    .sort((firstTask, secondTask) => secondTask.id - firstTask.id)

  return (
    <main className={styles.main}>
      <section className={styles.tasksContainer}>
        <h1 className={styles.title}>Tarefas</h1>
        <TodoForm />

        <ul className={styles.taskList}>
          {sortedTasks.map((task) => (
            <TodoItem
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}
