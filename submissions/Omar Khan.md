# 🏅 Debugging Olympics — Submission

> **How to use this file:** Work on your **own branch** (`fix/<your-name>`).
> Copy this file to `submissions/<your-name>.md`, fill every section, commit it
> alongside your code fix, and open a Pull Request. One bug per section.

---

## 👤 Participant

| Field | Your answer |
| --- | --- |
| Name |Omar  |
| Branch | `fix/omar` |
| Month / Round | Month 1 |
| Time started |  |
| Time finished |  |
| Total time (min) |  |

---

## 🐞 Bug #1

**Symptom I observed (what was visibly wrong):**
> clonning was improper ,react wasn't recognizing the changes because the original state array wasn't being cloned.
 
**Where the bug lived (file + line / function):**
> app.jsx, line 39 , Inside the toggleTask(id) function.
 
**Root cause (why it was happening — in your own words):**
>data/ui was not changing as react thought nothing changed as array remained same

**The fix — before:**
```jsx
function toggleTask(id) {
    // BUG #1 (state): see ANSWER_KEY.md
    const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks(tasks)
  }
```
 
**The fix — after:**
```jsx
  function toggleTask(id) {
    
    const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks(prev=> prev.map(t=>t.id === id ? {...t,done:task.done}:t ))
  }
 
```
 
**Why this fix works:**
> as it creates a brand-new array copy with the updated task
 
---
 
## 🐞 Bug #2
 
**Symptom I observed (what was visibly wrong):**
>useEffect dependency was empty
 
**Where the bug lived (file + line / function):**
>app.jsx, line 21
 
**Root cause (why it was happening — in your own words):**
>the counter wasn't recalculating 
 
**The fix — before:**
```jsx
   useEffect(() => {
    setRemaining(tasks.filter((t) => !t.done).length)
  }, [])
```
 
**The fix — after:**
```jsx
useEffect(() => {
    setRemaining(tasks.filter((t) => !t.done).length)
  }, [tasks]) // <-- BUG #2 
```
 
**Why this fix works:**
>added tasks in dependency in useffect
 

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

Toggled a task to "done" nd the checkbox updated instantly and the remaining tasks counter correctly decreased by one.
>

---

## 💭 Reflection (optional, scored bonus)

Bug #1 was a state mutation mistake. Bug #2 was a lifecycle/dependency mistake.
>
