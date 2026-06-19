# 🏅 Debugging Olympics — Submission

> **How to use this file:** Work on your **own branch** (`fix/<your-name>`).
> Copy this file to `submissions/<your-name>.md`, fill every section, commit it
> alongside your code fix, and open a Pull Request. One bug per section.

---

## 👤 Participant

| Field | Your answer |
| --- | --- |
| Name | Pulkit Dadwal |
| Branch | `fix/pulkit` |
| Month / Round | Month 1 |
| Time started | 5:15 |
| Time finished | 5:37 |
| Total time (min) | 22 |

---

## 🐞 Bug #1

**Symptom I observed (what was visibly wrong):**
> The check button in TaskItem.jsx wasn't working. I saw that it's 'checked' property depended on task.done property. Upon tracking it down to the root file i noticed this task.done property was passed as a prop in App.jsx function. In the toggleTask function i noticed that the new toggle state was and old toggle state had the same object reference.

**Where the bug lived (file + line / function):**
> In file App.jsx, Line number 39, in toggleTask function.

**Root cause (why it was happening — in your own words):**
> In setTasks function, the same tasks object was being passed in the function. The setState function acts when there is a change in memory. Since we passed the same reference object 'tasks' again, React didn't register it as a change. This is called mutation problem in React.

**The fix — before:**
```jsx
function toggleTask(id) {
    // BUG #1 (state): The line 38 was causing the main issue it was directly trying to mutate the array
    const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks(prev=> prev.map(t=>t.id === id ? {...t,done:task.done}:t ))
  }
```

**The fix — after:**
```jsx
function toggleTask(id) {
    // BUG #1 (state): see ANSWER_KEY.md
    const task = tasks.find((t) => t.id === id)
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }
```

**Why this fix works:**
> I used the map function to create a new array and spread operator to copy the values of previous object and passed in into a new object. This avoids mutating the existing state and provides React with new references, allowing it to detect the change and re-render correctly.

---

## 🐞 Bug #2

**Symptom I observed (what was visibly wrong):**
> I noticed the number of tasks remaining never changed in the UI. Upon closer inspection, I saw the useEffect function had a missing dependency. Without any dependency, the useEffect function only executes once.

**Where the bug lived (file + line / function):**
> In App.jsx, line 23, inside App function

**Root cause (why it was happening — in your own words):**
> The useEffect function didn't have any dependency passed inside it. Without a dependency, the code inside useEffect renders only once and never again.

**The fix — before:**
```jsx
export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)

  // Banner count of tasks still to do. Kept in sync with the list via an effect.
  const [remaining, setRemaining] = useState(
    INITIAL_TASKS.filter((t) => !t.done).length,
  )
  useEffect(() => {
    setRemaining(tasks.filter((t) => !t.done).length)
  }, []) // <-- BUG #2 (lifecycle): see ANSWER_KEY.md
```

**The fix — after:**
```jsx
export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)

  // Banner count of tasks still to do. Kept in sync with the list via an effect.
  const [remaining, setRemaining] = useState(
    INITIAL_TASKS.filter((t) => !t.done).length,
  )
  useEffect(() => {
    setRemaining(tasks.filter((t) => !t.done).length)
  }, [tasks.filter((t) => !t.done).length]) // <-- BUG #2 (lifecycle): see ANSWER_KEY.md
```

**Why this fix works:**
> I passed a dependency for useEffect which contained the length of the tasks which were not completed. As such, the useEffect function got executed every time there was a change in the dependency value. The useEffect function tracks changes in the dependecy passed to it and the code written inside useEffect re-executes every time there is a change in the dependecy value.

---

## 🧰 What I used to find & fix the bugs

Tick all that apply and add a one-line note on *how* each helped.

- [*] Browser DevTools console / Elements
- [ ] React DevTools (Components / Profiler) — _how:_
- [ ] `console.log` / breakpoints — _how:_
- [ ] React official docs — _which page:_
- [ ] ESLint / `eslint-plugin-react-hooks` warning — _which rule:_
- [ ] AI assistant (e.g. ChatGPT / Claude) — _what I asked & what I verified myself:_
- [ ] Teammate / pair — _what we discussed:_
- [ ] Other:

---

## ✅ How I verified the fix

Describe the exact steps you took to confirm each bug is gone (e.g. "ticked a
task → row struck through and count updated"; "added a task → tab title changed").
> Task 1: When clicking the check button, it was getting checked and the intended effect of strikethrough through text also appeared.
> Task 2: Upon checking tasks off the list, the number of tasks completed banner at the top changed as intended.

---

## 💭 Reflection (optional, scored bonus)

- What category of React mistake was each bug? (state / lifecycle / rendering / …)
- How would you prevent this class of bug in real code?
> 
