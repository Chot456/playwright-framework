**Playwright Automation Framework (UI + API + CI)**
📌 Overview

* This repository demonstrates a production-style QA Automation Framework built using:

* Playwright + TypeScript

* Page Object Model (POM)

* API + UI testing in one framework

* Data setup via API

* Environment support (QA / UAT)

* GitHub Actions CI

* Live HTML test report (GitHub Pages) (https://chot456.github.io/playwright-framework/playwright-report/)

* Structured logging

* The goal is to show scalable, reliable, and maintainable automation suitable for real-world projects.
<br>

**🧠 Test Strategy**<br>
Layer	Purpose

API Tests	Validate business logic fast & stable

UI Smoke Tests	Validate critical user journeys

UI Regression	Nightly validation

API Setup	Create data before UI tests
<br>

**Principle:**
<p>UI tests verify behavior.</p>
<p>API tests verify correctness.</p>
<br>

**⚙️ Installation**<br>
git clone <repo-url>
cd playwright-framework
npm install
npx playwright install
<br>

**🔐 Environment Setup**<br>

Create env file:

.env.qa
BASE_URL=https://qa.app.com
VALID_USERNAME=qa_user
VALID_PASSWORD=qa_pass
API_BASE_URL=https://qa.api.com
<br>

**▶️ Run Tests**

Run UI + API

TEST_ENV=qa npx playwright test

Run only API

npx playwright test tests/api

Run smoke tests

npx playwright test -g "@smoke"

