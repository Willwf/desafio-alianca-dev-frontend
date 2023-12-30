import { ReactNode, createContext, useState } from 'react'

export interface Task {
  id: number
  text: string
  completed: boolean
}

export interface TaskContextProps {
  tasks: Task[]
  addTask: (text: string) => void
  toggleTask: (taskId: number) => void
  deleteTask: (taskId: number) => void
}

export const TaskContext = createContext<TaskContextProps | undefined>(
  undefined,
)

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }])
  }

  const toggleTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    )
    setTasks(updatedTasks)
  }

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}
