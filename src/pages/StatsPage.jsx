export default function StatsPage({ tasks }) {
  const total = tasks.length
  const done = tasks.filter((t) => t.done).length
  const active = total - done
  const pct = total === 0 ? 0 : Math.round((done / total) * 100)

  const byPriority = {
    high: tasks.filter((t) => t.priority === 'high').length,
    medium: tasks.filter((t) => t.priority === 'medium').length,
    low: tasks.filter((t) => t.priority === 'low').length,
  }

  return (
    <section className="stats">
      <h2>📊 Stats</h2>

      <div className="stat-grid">
        <div className="stat-card">
          <span className="stat-num">{total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">{active}</span>
          <span className="stat-label">Active</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">{done}</span>
          <span className="stat-label">Done</span>
        </div>
      </div>

      <div className="progress">
        <div className="progress-bar" style={{ width: `${pct}%` }} />
      </div>
      <p className="muted">{pct}% complete</p>

      <h3>By priority</h3>
      <ul className="priority-list">
        <li>
          <span className="badge badge--high">high</span> {byPriority.high}
        </li>
        <li>
          <span className="badge badge--medium">medium</span> {byPriority.medium}
        </li>
        <li>
          <span className="badge badge--low">low</span> {byPriority.low}
        </li>
      </ul>
    </section>
  )
}
