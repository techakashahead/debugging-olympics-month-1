export default function SearchBar({ query, onChange }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search tasks…"
      value={query}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search tasks"
    />
  )
}
