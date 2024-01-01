import styles from './styles.module.css'
import { useState } from 'react'
import { useTaskContext } from '../../utils/useTaskContext'

export function TodoForm() {
  const { addTask } = useTaskContext()
  const [newTask, setNewTask] = useState('')

  function handleAddTask() {
    if (newTask.trim() !== '') {
      addTask(newTask)
      setNewTask('')
    }
  }

  return (
    <div className={styles.formContainer}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar</button>
    </div>
  )
}
