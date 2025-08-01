# SauceDemo Playwright Tests with Allure Reporting

This project contains automated UI tests for [SauceDemo](https://www.saucedemo.com) using Playwright with TypeScript and the Page Object Model pattern.  
Allure is used for generating detailed test reports.

---

## Prerequisites

- Node.js (v16 or higher recommended)  
- npm (comes with Node.js)  
- Git (optional, if cloning the repo)  
- Make sure your terminal or command prompt can run global npm packages (PATH includes npm global bin folder)

---

## Installation and Setup

1. **Clone the repository** (or navigate to your project folder):

```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
```

2. Install project dependencies:
```bash
    npm install
```

3. Install Allure Commandline globally:
```bash
    npm install -g allure-commandline
```

## Running Tests and Generating Reports

1. Run tests:
```bash
    npx playwright test
```

2. Generate Allure report:
```bash
    allure generate ./allure-results -o ./allure-report --clean
```

3. Open Allure report:
```bash
    allure open ./allure-report
```

For convenience there are prepared scripts in package.json:
```json
"scripts": {
  "test": "playwright test",
  "allure:generate": "allure generate ./allure-results -o ./allure-report --clean",
  "allure:open": "allure open ./allure-report"
}
```

## Useful Links
- [Playwright Docs](https://playwright.dev/)
- [Allure Report Docs](https://allurereport.org/docs/playwright/)