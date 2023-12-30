import { TodoList } from './components/TodoList'
import { TaskProvider } from './contexts/TaskContext'

function App() {
  return (
    <TaskProvider>
      <TodoList />
    </TaskProvider>
  )
}

export default App
