# Playwright Data-Driven Test Suite

## Overview

This project implements an end-to-end test suite using a data-driven approach. Test cases are defined in JSON and executed dynamically to reduce duplication and improve scalability.
The tests validate task management functionality across different application views (ie. Web and Mobile).

## Project Structure

pages/
LoginPage.ts
BoardPage.ts

tests/
task-board.spec.ts
testData.json

## How It Works

Each test case:

1. Logs into the application
2. Navigates to a specific application using the sidebar
3. Verifies that a task appears in the correct column
4. Confirms the associated tag(s) are present on that task card
