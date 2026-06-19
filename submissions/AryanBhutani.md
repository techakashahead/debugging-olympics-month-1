# 🏅 Debugging Olympics — Submission

> **How to use this file:** Work on your **own branch** (`fix/<your-name>`).
> Copy this file to `submissions/<your-name>.md`, fill every section, commit it
> alongside your code fix, and open a Pull Request. One bug per section.

---

## 👤 Participant

| Field | Your answer |
| --- | --- |
| Name |    Aryan Bhutani  |
| Branch | `fix/AryanBhutani` |
| Month / Round | Month 1 |
| Time started | 5:15 |
| Time finished | 5:25  |
| Total time (min) | 10 |

---

## 🐞 Bug #1

**Symptom I observed (what was visibly wrong):**
>The bug I have observed was that the checkbox was not working. Even after a user clicks on the checkbox it didn't got updated 

**Where the bug lived (file + line / function):**
>The bug was in the App.jsx file in the function toggle task function.

**Root cause (why it was happening — in your own words):**
>The main cause of that bug was that the array was getting accessed directly without. Hence causing a direct mutation in the array.

**The fix — before:**
```jsx
// paste the broken code
function toggleTask(id) {
    // BUG #1 (state): The line 38 was causing the main issue it was directly trying to mutate the array
    const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks(prev=> prev.map(t=>t.id === id ? {...t,done:task.done}:t ))
  }

```

**The fix — after:**
```jsx
// paste your corrected code

function toggleTask(id) {
    // BUG #1 (state): Added proper map function to make it work properly and also handled the task thing without mutating directly
   setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, done: !task.done }
        : task
    )
  )
  }
```

**Why this fix works:**
> Mutating the array directly does not work in react. Arrays are usually of reference types and they need to be handled with the ... operator. Hence this fix will work,

---

## 🐞 Bug #2

**Symptom I observed (what was visibly wrong):**
> The issue I saw in the codebase was the usEffect getting used without any kind of dependencies which would surely cause running on every render. I saw the remaining tasks components getting rendered only once. 

**Where the bug lived (file + line / function):**
>The bug was in App.jsx file under the line 22 in the useeffect hook

**Root cause (why it was happening — in your own words):**
>The use effect was called directly without any dependencies hence it was causing to run only one and not on every render. Fixed the issue by adding tasks as a dependencies

**The fix — before:**
```jsx
// paste the broken code
  useEffect(() => {
    setRemaining(tasks.filter((t) => !t.done).length)
  }, []) // <-- BUG #2 (lifecycle): 

```

**The fix — after:**
```jsx
// paste your corrected code
useEffect(() => {
  setRemaining(tasks.filter((t) => !t.done).length)
}, [tasks])
```

**Why this fix works:**
> UseEffect requires a dependency against which it needs to run the component. The absence of dependency will lead to running of the component only once and not with every render. This can be fixed if we add a proper dependency in the []. This dependency behaves like a toggle on when the components needs to get rendered on change.

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
>task 1 → checked the tasks and got the intentional behaviour of the application. The Strikethrough row."
>"task 2-> Verified the component does not rerun on every rerender under the chromedevtools."

---

## 💭 Reflection (optional, scored bonus)

- What category of React mistake was each bug? (state / lifecycle / rendering / …)
- How would you prevent this class of bug in real code?
>The one category of bug was of state. The state updation with Array Mutation issue was the main reason of this issue. 
>The second bug was more of a lifecycle bug which was like. the lifecycle of the tasks was not preserved and it got rerun on every render, which caused the issue.
To prevent such type of bugs in real code the best thing we can do is to properly use chrome devtools, and follow proper documentation of react so that these types of bugs does not happen in realtime production environment.
