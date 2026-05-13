# Playwright Data-Driven Test Suite

## Overview

This project implements an end-to-end test suite for a project board web app using a data-driven approach. Test cases are defined in JSON and executed dynamically to reduce duplication and improve scalability.

The tests validate task management functionality across different application views (e.g. Web and Mobile).

---

## Challenges

By inspecting the DOM I found that the UI was built without strict semantic grouping or testing attributes. Columns are styled containers, and task cards are composed of nested headings, paragraphs and spans without strict hierarchy.

To work with this structure, I used role-based selectors where possible and text-based assertions for tags. Parent traversal was used selectively to associate tasks with their respective columns when necessary.

---

## Project Structure
```
pages/
    LoginPage.ts
    BoardPage.ts
tests/
    task-board.spec.ts
    testData.json
```
---

## How It Works

Each test case:

1. Logs into the application
2. Navigates to a specific application using the sidebar
3. Verifies that a task appears in the correct column
4. Confirms the associated tag(s) are present on that task card
