# 🏅 Debugging Olympics — Submission

> **How to use this file:** Work on your **own branch** (`fix/<your-name>`).
> Copy this file to `submissions/<your-name>.md`, fill every section, commit it
> alongside your code fix, and open a Pull Request. One bug per section.

---

## 👤 Participant

| Field | Your answer |
| --- | --- |
| Name | Aditya Mishra |
| Branch | `fix/Aditya-Mishra` |
| Month / Round | Month 1 |
| Time started |  |
| Time finished |  |
| Total time (min) |  |

---

## 🐞 Bug #1

**Symptom I observed (what was visibly wrong):**
> Ran the app and found that the checkbox were not working. And realised they were showing changes after i re rendered them manually 
> Realised the issue was in useState
> First thought it was a functional issue that you cannot directly pass !tasks.done
> Later found the issue was that we were passing the array directly.

**Where the bug lived (file + line / function):**
> The bug was in line 39 of App.jsx (toggleTask)

**Root cause (why it was happening — in your own words):**
> Later found the issue was that we were passing the array directly.
> Also passing !value is not effecient as it loads changes for future

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
>I saw that setRemaining inside useEffect was sending back an empty array i-e without any value for the param.

**Where the bug lived (file + line / function):**
>The bug was in line 22-23 of App.jsx (useEffect)

**Root cause (why it was happening — in your own words):**
> useEffect requires dependencies.

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
