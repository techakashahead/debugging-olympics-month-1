# 🏅 Debugging Olympics — Submission

> **How to use this file:** Work on your **own branch** (`fix/<your-name>`).
> Copy this file to `submissions/<your-name>.md`, fill every section, commit it
> alongside your code fix, and open a Pull Request. One bug per section.

---

## 👤 Participant

| Field | Your answer |
| --- | --- |
| Name |  Arimardan Pandey Saurabh|
| Branch | `fix/arimardan` |
| Month / Round | Month 1 |
| Time started | 5:15 |
| Time finished | 5:25 |
| Total time (min) | 10 min |

---

## 🐞 Bug #1

**Symptom I observed (what was visibly wrong):**
> set task state is not changing

**Where the bug lived (file + line / function):**
>const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks([...tasks])
  }

**Root cause (why it was happening — in your own words):**
> after the checking the box task done but set-task state not changing bcz updated task is not pushed in settask array

**The fix — before:**
```jsx
// paste the broken code
const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks()
  }

```

**The fix — after:**
```jsx
// paste your corrected code
const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks([...tasks])
  }
```

**Why this fix works:**
> i just spread the updated tasks variable in the state 

---

## 🐞 Bug #2

**Symptom I observed (what was visibly wrong):**
>  dependency array was missing that's why useEffect was not re-rendering
**Where the bug lived (file + line / function):**
>missing dependency array

**Root cause (why it was happening — in your own words):**
> due to react lifecycle 

**The fix — before:**
```jsx
// paste the broken code
useEffect(() => {
    setRemaining(tasks.filter((t) => !t.done).length)
  },[] ) // <-- BUG #2 (lifecycle): see ANSWER_KEY.md

```

**The fix — after:**
```jsx
// paste your corrected code
useEffect(() => {
    setRemaining(tasks.filter((t) => !t.done).length)
  }, [tasks]) // <-- BUG #2 (lifecycle): see ANSWER_KEY.md

```

**Why this fix works:**
> component did mount

---

## 🧰 What I used to find & fix the bugs

Tick all that apply and add a one-line note on *how* each helped.

- [ ] Browser DevTools console / Elements
- [ ] React DevTools (Components / Profiler) — _how:_
- [ ] `console.log` / breakpoints — _how:_
- [ ] React official docs — _which page:
- [ ] ESLint / `eslint-plugin-react-hooks` warning — _which rule:_
- [ ] AI assistant (e.g. ChatGPT / Claude) — _what I asked & what I verified myself:_
- [ ] Teammate / pair — _what we discussed:_
- [ ] Other:

---

## ✅ How I verified the fix

Describe the exact steps you took to confirm each bug is gone (e.g. "ticked a
task → row struck through and count updated"; "added a task → tab title changed").
> just understand the root cause and fix it using my k/w of useeffect and usestate hooks 

---

## 💭 Reflection (optional, scored bonus)

- What category of React mistake was each bug? (state / lifecycle / rendering / …)
- How would you prevent this class of bug in real code?
>
