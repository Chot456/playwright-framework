**Playwright Login Automation POC**
📌 Overview

This repository contains a UI automation framework built using:

Playwright

TypeScript

Page Object Model (POM)

Environment configuration

Session reuse (storageState)

GitHub Actions CI

Multi-format reporting (HTML + JUnit + Allure)

The goal of this POC is to demonstrate a scalable, maintainable, and CI-ready UI automation approach suitable for enterprise-level test automation.


**Design Principles**

Maintainability → Page Object Model

Security → Environment variables (no hardcoded credentials)

Speed → Storage state authentication reuse

Scalability → Parallel execution ready

CI Ready → GitHub Actions integration

Traceability → Multi-format reports


**Installation**
git clone <repo-url>
cd pw-login-poc
npm install
npx playwright install


**Environment Variables**

Create .env

BASE_URL=https://the-internet.herokuapp.com
VALID_USERNAME=tomsmith
VALID_PASSWORD=SuperSecretPassword!
INVALID_USERNAME=wronguser
INVALID_PASSWORD=wrongpass


**Run Tests**
Run all tests
npm test
Headed mode (for debugging)
npm run test:headed
UI mode (Playwright Inspector)
npm run test:ui


**Reporting**
HTML Report
npm run report
Allure Report
npm run allure:generate
npm run allure:open


**CI Pipeline (GitHub Actions)**

The framework runs automatically on:

Push to main

Pull Requests

Pipeline Steps:

Install dependencies

Install browsers

Inject environment secrets

Generate session state

Execute tests headless

Publish HTML + JUnit + Allure reports

Artifacts available in GitHub Actions → Artifacts


**Test Tagging**

Run only smoke tests:

npx playwright test -g "@smoke"
