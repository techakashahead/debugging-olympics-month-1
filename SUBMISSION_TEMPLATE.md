# 🏅 Debugging Olympics — Submission

> **How to use this file:** Work on your **own branch** (`fix/<your-name>`).
> Copy this file to `submissions/<your-name>.md`, fill every section, commit it
> alongside your code fix, and open a Pull Request. One bug per section.

---

## 👤 Participant

| Field | Your answer |
| --- | --- |
| Name | Medha |
| Branch | `fix-medha` |
| Month / Round | Month 1 |
| Time started |  |
| Time finished |  |
| Total time (min) |  |

---

## 🐞 Bug #1

**Symptom I observed (what was visibly wrong):** 
> clonning was not done in usestate

**Where the bug lived (file + line / function):**
> app.jsx, line 39

**Root cause (why it was happening — in your own words):**
>data was not updating

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
    // BUG #1 (state)
    const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks(prev=> prev.map(t=>t.id === id ? {...t,done:task.done}:t ))
  }

```

**Why this fix works:**
>made a copy then updated the state

---

## 🐞 Bug #2

**Symptom I observed (what was visibly wrong):**
>there was no dependencies in useeffect function

**Where the bug lived (file + line / function):**
>app.jsx, line 21

**Root cause (why it was happening — in your own words):**
>re rendering was not occuring

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
  }, [tasks]) // <-- BUG #2 (lifecycle)
```

**Why this fix works:**
>now useeffect has a dependency

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
