# Trainee submissions

Each participant adds their own `<your-name>.md` here (copied from `../SUBMISSION_TEMPLATE.md`) on their `fix/<your-name>` branch.


## 👤 Participant

| Field | Your answer |
| --- | --- |
| Name |  Tanya Mishra|
| Branch | `fix/tanya-mishra` |
| Month / Round | Month 1 |
| Time started | 5:15pm |
| Time finished |  5:55pm|
| Total time (min) | 40 mins |

---

## 🐞 Bug #1

**Symptom I observed (what was visibly wrong):**
> When I clicked the task checkbox, the task completion status and remaining task count did not update correctly in the UI.

**Where the bug lived (file + line / function):**
> In the toggletask() function

**Root cause (why it was happening — in your own words):**
>The task object was being modified directly, and the same tasks array was passed back to React using setTasks(tasks). Since the array reference did not change, React could not detect the state update properly and did not re-render the component.

**The fix — before:**
```jsx
// paste the broken code
function toggleTask(id) {
    // BUG #1 (state): see ANSWER_KEY.md
    const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks(tasks)
  }
```

**The fix — after:**
```jsx
// paste your corrected code
function toggleTask(id) {
    // BUG #1 (state): see ANSWER_KEY.md
    const task = tasks.find((t) => t.id === id)
    task.done = !task.done
    setTasks([...tasks])
  }
```

**Why this fix works:**
> The fix creates a new array and a new task object instead of modifying the existing state directly. 

---

## 🐞 Bug #2

**Symptom I observed (what was visibly wrong):**
>

**Where the bug lived (file + line / function):**
>

**Root cause (why it was happening — in your own words):**
>

**The fix — before:**
```jsx
// paste the broken code
```

**The fix — after:**
```jsx
// paste your corrected code
```

**Why this fix works:**
>

---

## 🧰 What I used to find & fix the bugs

Tick all that apply and add a one-line note on *how* each helped.

- [ * ] Browser DevTools console / Elements
- [ * ] React DevTools (Components / Profiler) — _how:_
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
> I verified the fix by toggling task checkboxes and confirming that the task status.

---