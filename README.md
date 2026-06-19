# 🐛 TaskFlow — Debugging Olympics (Month 1)

A small React task-manager app. **It has 2 bugs planted in it.** Your job is to
find and fix both within the time limit.

- ⏱️ **Time limit:** 30 minutes
- 🎯 **Bugs to fix:** 2 (both are **state / lifecycle** issues)
- 🧩 **Difficulty:** Beginner (Month 1)

---

## The app

TaskFlow lets you add tasks, mark them done, delete them, search/filter the list,
and view stats on a second page.

- **Components:** `SearchBar`, `TaskForm`, `TaskList`, `TaskItem` (4 total)
- **Pages / routes:** `/` (Tasks) and `/stats` (Stats) via `react-router-dom`
- **Search + filter:** search box + `all / active / done` filter chips

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed URL (usually http://localhost:5173).

---

## 🏁 Your challenge

Two things are broken. Reproduce them, find the root cause, and fix them.

### Symptom 1
Tick a task's checkbox (or untick one). **Nothing happens** — the task doesn't
visibly toggle between active/done, and the "Showing X of Y" counts don't budge.

### Symptom 2
The **"🔔 N task(s) still to do" banner** at the top of the list is supposed to
update as you add, complete, or delete tasks. Instead it stays frozen at its
starting number — add a task and the list grows to "Showing 6 of 6" while the
banner still claims there are fewer to do.

> Both bugs are classic React **state** and **lifecycle** mistakes. You should
> NOT need to add new libraries or rewrite components — each fix is only a few
> lines.

### Hints (open only if stuck)

<details>
<summary>Hint for Symptom 1</summary>

How does React decide a component needs to re-render? Look at **how the tasks
array is updated** when you toggle. Are you giving React a *new* array, or the
same one with a mutated item inside it?
</details>

<details>
<summary>Hint for Symptom 2</summary>

Look at the `useEffect` that updates the banner count (`remaining`). **When**
does that effect re-run? Check its dependency array — what is it watching?

</details>


---

## 📤 How to submit

Work on **your own branch** and submit via a Pull Request:

```bash
git checkout -b fix/<your-name>     # never work on main
npm install && npm run dev          # reproduce the bugs first
#   ...fix the bugs in src/...
cp SUBMISSION_TEMPLATE.md submissions/<your-name>.md   # then fill it in
git add .
git commit -m "fix: state + lifecycle bugs (<your-name>)"
git push -u origin fix/<your-name>
#   ...open a Pull Request from fix/<your-name> -> main
```

Your submission write-up (`submissions/<your-name>.md`) must document, **for each
bug**: the symptom, where it lived, the root cause, the before/after code, *why*
your fix works, and **what tools/resources you used** to find and fix it. Use
`SUBMISSION_TEMPLATE.md` — it has every section laid out.

---

## 🚀 Deploy

This project is ready for **Vercel** or **Netlify** (SPA routing is configured
in `vercel.json` and `public/_redirects`).

- **Vercel:** `npm i -g vercel && vercel` (build command `npm run build`, output `dist`)
- **Netlify:** drag the `dist/` folder to app.netlify.com, or connect the repo
  (build `npm run build`, publish `dist`)
