# 🏅 Debugging Olympics — Submission

> **How to use this file:** Work on your **own branch** (`priyanshu`).
> Copy this file to `submissions/<your-name>.md`, fill every section, commit it
> alongside your code fix, and open a Pull Request. One bug per section.

---

## 👤 Participant

| Field | Your answer |
| --- | --- |
| Name |  |
| Branch | `priyanshu` |
| Month / Round | Month 1 |
| Time started |  |
| Time finished |  |
| Total time (min) |  |

---

## 🐞 Bug #1

**Symptom I observed (what was visibly wrong):**
> we can not tick and untick teh task and doest know the remaining and completed task's count

**Where the bug lived (file + line / function):**
> i found the bug in line 39 in App.jsx  -> const task = tasks.find((t) => t.id === id) 

**Root cause (why it was happening — in your own words):**
> it was happening because it doesn't use the id to find the task and directly change it value

**The fix — before:**
```jsx
    const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks(tasks)
```

**The fix — after:**
```jsx
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
```

**Why this fix works:**
> it works same as same as before i can add, delete and tick and untick the tasks and count is also updating

---

## 🐞 Bug #2

**Symptom I observed (what was visibly wrong):**
> we cannot add new task what i see

**Where the bug lived (file + line / function):**
> i found the bug in line 23 in App.jsx ->  }, [])

**Root cause (why it was happening — in your own words):**
> it has no idea what to do when called

**The fix — before:**
```jsx
  }, []) 
```

**The fix — after:**
```jsx
  }, [tasks]) /
```

**Why this fix works:**
> it works same as same as before i can add, delete and tick and untick the tasks and count is also updating

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
