# 🏅 Debugging Olympics — Submission

> **How to use this file:** Work on your **own branch** (`fix/<your-name>`).
> Copy this file to `submissions/<your-name>.md`, fill every section, commit it
> alongside your code fix, and open a Pull Request. One bug per section.

---

## 👤 Participant

| Field | Your answer |
| --- | --- |
| Name | Shreya Tyagi |
| Branch | `fix/<shreyabranch>` |
| Month / Round | Month 1 |
| Time started |  |
| Time finished |  |
| Total time (min) |  |

---

## 🐞 Bug #1

**Symptom I observed (what was visibly wrong):**
> When I clicked a task's checkbox, the task did not toggle between active and completed. The UI and task counts did not update.

**Where the bug lived (file + line / function):**
>src/App.jsx (toggleTask() function)

**Root cause (why it was happening — in your own words):**
>The task object was being mutated directly (task.done = !task.done) and the same tasks array reference was passed back into setTasks(tasks). Since React did not receive a new state reference, it did not trigger a re-render.

**The fix — before:**
```jsx
// paste the broken code  
// function toggleTask(id) {
//   const task = tasks.find((t) => t.id === id)
//   task.done = !task.done
//   setTasks(tasks)
// }
```

**The fix — after:**
```jsx
// paste your corrected code function toggleTask(id) {
//   setTasks(
//     tasks.map((task) =>
//       task.id === id
//         ? { ...task, done: !task.done }
//         : task
//     )
//   )

```

**Why this fix works:**
>

---

## 🐞 Bug #2

**Symptom I observed (what was visibly wrong):**
>The "🔔 N task(s) still to do" banner stayed at its initial value and did not update when tasks were added, completed, or deleted.

**Where the bug lived (file + line / function):**
>src/App.jsx → useEffect()

**Root cause (why it was happening — in your own words):**
>The useEffect hook had an empty dependency array ([]), so it only ran once when the component mounted. It did not run again when the tasks state changed, causing the remaining task count to become out of sync with the actual task list.


**The fix — before:**
```jsx
// paste the broken code useEffect(() => {
//   setRemaining(tasks.filter((t) => !t.done).length)
// }, [])
```

**The fix — after:**
```jsx
// paste your corrected code useEffect(() => {
//   setRemaining(tasks.filter((t) => !t.done).length)
// }, [tasks])
```

**Why this fix works:**
>

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
