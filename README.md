# ✅ To-Do List App

> A simple and interactive to-do list application built using **HTML**, **CSS**, and **JavaScript**.

## 📑 Table of Contents

- [General Info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Code Examples](#code-examples)
- [Features](#features)
- [Project Status](#project-status)
- [Inspiration](#inspiration)
- [Contact](#contact)
- [Usage Instructions](#usage-instructions)
- [Code Quality Checks](#code-quality-checks)
- [Continuous Integration (CI)](#continuous-integration-ci)
- [Repository Setup](#repository-setup)

---

## 📋 General Info

This is a to-do list app that allows users to add, remove, and edit tasks
efficiently. The project follows the principle of separation of concerns
and uses JavaScript **dataset** to manage the tasks dynamically.

---

## 🖼️ Screenshots

![To-Do List Screenshot](./planning/screenshot1.png)
![To-Do List Screenshot2](./planning/screenshot2.png)

---

## 💻 Technologies

- HTML5
- CSS3
- JavaScript (Vanilla)
- Node.js (v14.16.0)
- Visual Studio Code (IDE)

---

## Setup

- `npm run start`
- `npm install`

## Code Examples

```js
// Edit a task

const filter = (id) => {
  taskList.tasks = taskList.tasks.filter((task) => id !== task.uuid);
};

const render = () => {
  dom.taskList.innerHTML = createHtmlEle();
};

const handleEdit = (id) => {
  const taskObj = getTaskObj(id);
  if (taskObj.length > 0) {
    dom.taskInput.value = taskObj[0].text;
    filter(id);
    render();
  }
};
```

## Features

- Add new tasks.
- Remove tasks.
- Mark tasks as completed.
- Tasks persist in session storage.

### To-do list

- Add backend storage for persistent data.
- Add task filtering by status.

## Status

Project is: finished

## Inspiration

N/A. The goal is to practice **DOM manipulation**, **event handling**, and **dataset usage**.

## Contact

By [boba-milktea](https://github.com/boba-milktea)

## Instructions for use

<details>
  <summary>Getting Started</summary>

<!-- a guide to using this repository -->

1. `git clone git@github.com:HackYourFutureBelgium/template-markdown.git`
2. `cd template-markdown`
3. `npm install`

## Code Quality Checks

- `npm run format`: Makes sure all the code in this repository is well-formatted
  (looks good).
- `npm run lint:ls`: Checks to make sure all folder and file names match the
  repository conventions.
- `npm run lint:md`: Will lint all of the Markdown files in this repository.
- `npm run lint:css`: Will lint all of the CSS files in this repository.
- `npm run validate:html`: Validates all HTML files in your project.
- `npm run spell-check`: Goes through all the files in this repository looking
  for words it doesn't recognize. Just because it says something is a mistake
  doesn't mean it is! It doesn't know every word in the world. You can add new
  correct words to the [./.cspell.json](./.cspell.json) file so they won't cause
  an error.
- `npm run accessibility -- ./path/to/file.html`: Runs an accessibility analysis
  on all HTML files in the given path and writes the report to
  `/accessibility_report`

## Continuous Integration (CI)

When you open a PR to `main`/`master` in your repository, GitHub will
automatically do a linting check on the code in this repository, you can see
this in the[./.github/workflows/lint.yml](./.github/workflows/lint.yml) file.

If the linting fails, you will not be able to merge the PR. You can double check
that your code will pass before pushing by running the code quality scripts
locally.

## Repo Setup

- Give each member **_write_** access to the repo (if it's a group project)
- Turn on GitHub Pages and put a link to your website in the repo's description
- Go to _General_ Section > check **Discussions**
- In the _Branches_ section of your repo's settings make sure the
  `master`/`main` branch must:
  - "_Require a pull request before merging_"
  - "_Require approvals_"
  - "_Dismiss stale pull request approvals when new commits are pushed_"
  - "_Require status checks to pass before merging_"
  - "_Require branches to be up to date before merging_"
  - "_Do not allow bypassing the above settings_"

</details>
