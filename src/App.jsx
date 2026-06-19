import { useState, useEffect } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import StatsPage from './pages/StatsPage.jsx'

const INITIAL_TASKS = [
  { id: 1, text: 'Set up the project repo', priority: 'high', done: true },
  { id: 2, text: 'Write the search component', priority: 'medium', done: false },
  { id: 3, text: 'Fix the failing unit tests', priority: 'high', done: false },
  { id: 4, text: 'Review teammate pull request', priority: 'low', done: false },
  { id: 5, text: 'Deploy to Vercel', priority: 'medium', done: false },
]

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)

  // Banner count of tasks still to do. Kept in sync with the list via an effect.
  const [remaining, setRemaining] = useState(
    INITIAL_TASKS.filter((t) => !t.done).length,
  )
  useEffect(() => {
    setRemaining(tasks.filter((t) => !t.done).length)
  }, [tasks]) // <-- BUG #2 (lifecycle): see ANSWER_KEY.md

  function addTask(text, priority) {
    const newTask = {
      id: Date.now(),
      text,
      priority,
      done: false,
    }
    setTasks([...tasks, newTask])
  }

  function toggleTask(id) {
    // BUG #1 (state): see ANSWER_KEY.md
    const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks(prev => prev.map(t=>t.id === id ? {...t,done:task.done} : t ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>✅ TaskFlow</h1>
        <nav className="nav">
          <NavLink to="/" end>
            Tasks
          </NavLink>
          <NavLink to="/stats">Stats</NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                tasks={tasks}
                remaining={remaining}
                onAdd={addTask}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            }
          />
          <Route path="/stats" element={<StatsPage tasks={tasks} />} />
        </Routes>
      </main>
    </div>
  )
}
