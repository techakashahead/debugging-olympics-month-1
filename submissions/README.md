# Trainee submissions
# 🏅 Debugging Olympics — Submission

> **How to use this file:** Work on your **own branch** (`fix/<your-name>`).
> Copy this file to `submissions/<your-name>.md`, fill every section, commit it
> alongside your code fix, and open a Pull Request. One bug per section.

---

## 👤 Participant

| Field |  |
| --- | --- |
| Name | Swarnima |
| Branch | `fix/swarnima` |
| Month / Round | Month 1 |
| Time started |  |
| Time finished |  |
| Total time (min) |  |

---

## 🐞 Bug #1

**Symptom I observed (what was visibly wrong):**
>When I clicked on a task checkbox, the task status was not updating correctly in the UI. React was not reliably re-rendering after toggling a task.

**Where the bug lived (file + line / function):**
> App.jsx , toggleTask function

**Root cause (why it was happening — in your own words):**
>

**The fix — before:**
```jsx
function toggleTask(id) {
    // BUG #1 
    const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks(prev=> prev.map(t=>t.id === id ? {...t,done:task.done}:t ))
  }
```

**The fix — after:**
```jsx
// paste your corrected code

function toggleTask(id) {
    // BUG #1 (state): see ANSWER_KEY.md
    const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks(prev => prev.map(t=>t.id === id ? {...t,done:task.done} : t ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id))
  }

```

**Why this fix works:**
>Instead of updating the existing state directly, the fix creates a new array and a new task object. React receives a new state reference and correctly triggers a re-render.

---

## 🐞 Bug #2

**Symptom I observed (what was visibly wrong):**
> The "remaining tasks" count was not updating when tasks were completed, unchecked, added, or removed.

**Where the bug lived (file + line / function):**
>App.jsx, useEffect() that updates the remaining state

**Root cause (why it was happening — in your own words):**
> The effect had an empty dependency array ([]), so it only ran once when the component mounted. It never ran again when the tasks state changed.

**The fix — before:**
```jsx
useEffect(() => {
    setRemaining(tasks.filter((t) => !t.done).length)
  }, []) // <-- BUG #2 (lifecycle): 

//**The fix — after:**

useEffect(() => {
  setRemaining(tasks.filter((t) => !t.done).length)
}, [tasks])

//**Why this fix works:**
> Adding tasks to the dependency array makes the effect run every time the task list changes. This keeps the remaining task count synchronized with the actual task state.

---

## 🧰 What I used to find & fix the bugs

Tick all that apply and add a one-line note on *how* each helped.

- [ ] Browser DevTools console / Elements
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
>

---

## 💭 Reflection (optional, scored bonus)

- What category of React mistake was each bug? (state / lifecycle / rendering / …)
- How would you prevent this class of bug in real code?
>


Each participant adds their own `<your-name>.md` here (copied from `../SUBMISSION_TEMPLATE.md`) on their `fix/<your-name>` branch.
