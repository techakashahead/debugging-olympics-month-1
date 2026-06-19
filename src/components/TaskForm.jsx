import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('medium')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed, priority)
    setText('')
    setPriority('medium')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Add a new task…"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="New task text"
      />
      <select
        className="priority-select"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        aria-label="Priority"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="btn btn--primary">
        Add
      </button>
    </form>
  )
}
