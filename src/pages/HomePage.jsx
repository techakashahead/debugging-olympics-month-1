import { useState } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import TaskForm from '../components/TaskForm.jsx'
import TaskList from '../components/TaskList.jsx'

export default function HomePage({ tasks, remaining, onAdd, onToggle, onDelete }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all') // all | active | done

  // Search + filter are derived from props on every render (no extra state).
  const visibleTasks = tasks
    .filter((t) => t.text.toLowerCase().includes(query.toLowerCase()))
    .filter((t) => {
      if (filter === 'active') return !t.done
      if (filter === 'done') return t.done
      return true
    })

  return (
    <section>
      <TaskForm onAdd={onAdd} />

      <div className="banner">🔔 {remaining} task(s) still to do</div>

      <div className="controls">
        <SearchBar query={query} onChange={setQuery} />
        <div className="filters">
          {['all', 'active', 'done'].map((f) => (
            <button
              key={f}
              className={filter === f ? 'chip chip--active' : 'chip'}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <p className="muted">
        Showing {visibleTasks.length} of {tasks.length} tasks
      </p>

      <TaskList tasks={visibleTasks} onToggle={onToggle} onDelete={onDelete} />
    </section>
  )
}
