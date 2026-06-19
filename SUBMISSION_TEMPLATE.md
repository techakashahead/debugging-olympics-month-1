# 🏅 Debugging Olympics — Submission

> **How to use this file:** Work on your **own branch** (`fix/<your-name>`).
> Copy this file to `submissions/<your-name>.md`, fill every section, commit it
> alongside your code fix, and open a Pull Request. One bug per section.

---

## 👤 Participant

| Field | Your answer |
| --- | --- |
| Name |  Md Aaman
| Branch | `fix/mdaaman` |
| Month / Round | Month 1 |
| Time started |  5:15|
| Time finished |  5:30 |
| Total time (min) |  15 mins|

---

## 🐞 Bug #1

**Symptom I observed (what was visibly wrong):**
> it was react standard syntax debugging where we need to clone the prev object then need to modify that rather than updating it directly

**Where the bug lived (file + line / function):**
>app.jsx , line = 39 /toggleTask(id)

**Root cause (why it was happening — in your own words):**
>due to react behaviour 

**The fix — before:**
```jsx
// paste the broken code
```
setTasks(prev=> prev.filter((t) => t.id !== id))

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
