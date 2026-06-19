export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.done ? 'task task--done' : 'task'}>
      <label className="task-main">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-text">{task.text}</span>
      </label>

      <span className={`badge badge--${task.priority}`}>{task.priority}</span>

      <button
        className="btn btn--ghost"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete ${task.text}`}
      >
        ✕
      </button>
    </li>
  )
}
