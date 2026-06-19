
## 👤 Participant

| Field | Your answer |
| --- | --- |
| Name | Yudhishter Kumar |
| Branch | `fix/yudhishter` |
| Month / Round | Month 1 |
| Time started | 05:15 PM |
| Time finished | 05:45 PM |
| Total time (min) | 30 |

---

## 🐞 Bug #1

**Symptom I observed (what was visibly wrong):**
change the dependency array in use effect
>

**Where the bug lived (file + line / function):**
bug lives in function toggle where we are storing updated task in const task and directly updating the state with task which have only 1 entry not the whole array so to fix this we created a new array and insert entries accordingly
>

**Root cause (why it was happening — in your own words):**
the tasks array was not updated when toggle because const task is local variable which does not affect the tasks array to update tasks array we have to create new tasks array and insert entries accordingly
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
