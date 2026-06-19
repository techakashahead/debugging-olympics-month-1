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
setTasks(prev=> prev.map(t=>t.id === id ? {...t,done:task.done}:t ))

**Why this fix works:**
>. we clone the object and set the task with updateing the task value with done or not

---

## 🐞 Bug #2

**Symptom I observed (what was visibly wrong):**
> there was issue in dependency of useEffect

**Where the bug lived (file + line / function):**
>app.jsx, 21 / useEffect

**Root cause (why it was happening — in your own words):**
>no dependency given

**The fix — before:**
```jsx
// paste the broken code
```
useEffect(() => {
    setRemaining(tasks.filter((t) => !t.done).length)
  }) // <-- BUG #2 (lifecycle): see ANSWER_KEY.md

**The fix — after:**
```jsx
// paste your corrected code
```
useEffect(() => {
    setRemaining(tasks.filter((t) => !t.done).length)
  }, [tasks]) // <-- BUG #2 (lifecycle): see ANSWER_KEY.md


**Why this fix works:**
>

---

## 🧰 What I used to find & fix the bugs

Tick all that apply and add a one-line note on *how* each helped.

- [  * ] Browser DevTools console / Elements - to test the repo works fine
- [ ] React DevTools (Components / Profiler) — _how:_
- [ * ] `console.log` / breakpoints — _how:_  to check the value of task even if updated or not
- [ ] React official docs — _which page:_ 
- [ ] ESLint / `eslint-plugin-react-hooks` warning — _which rule:_
- [ ] AI assistant (e.g. ChatGPT / Claude) — _what I asked & what I verified myself:_
- [ ] Teammate / pair — _what we discussed:_
- [ ] Other: React notes

---

## ✅ How I verified the fix

Describe the exact steps you took to confirm each bug is gone (e.g. "ticked a
task → row struck through and count updated"; "added a task → tab title changed").
>
first i go through the readme file and then i analyze the work flow and the real bug i have to fix, then i go through the button i needed to fix the bug ,then i realize there was no cloning of object on updating the value of useState fucntion setTask , than i fix that
---
then i go to fix bug 2 and i realize there no depency in useEffect function and but we need to put dependency as per bussniess requirment and i udpate the dependency with the value using array that whenever my that value changes it will re render 

## 💭 Reflection (optional, scored bonus)

- What category of React mistake was each bug? (state / lifecycle / rendering / …)
there was bug in hooks of react , specially in useState and useEffect ,where in useState we use the best practice of update the attribute of useState is by cloning the previous object and make changes as per requirment and whenever the the value will changes it will refelect in ui as well

in useEffect there was missing dependecny where we need to add dependency as per our requirement,so that whenever the attribute changes the ui will re render

- How would you prevent this class of bug in real code?
>first go to deep analysis of bussniess requirement and go with the flow of work , and check where can bug cause , and check where the bug occurs and fix using with detail analysis of documnetaion and knowledge of that particular topic.and debug with sdlc.
