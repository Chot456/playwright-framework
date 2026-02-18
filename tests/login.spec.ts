import { test } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { DashboardPage } from "../src/pages/DashboardPage";
import { invalidLoginCases } from "../src/utils/testData";
import { createLogger } from "../src/utils/logger";

// Optional: safer env getter (recommended)
const mustGetEnv = (name: string) => {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
};

test.describe("Login POC", () => {
  test("Valid login @smoke", async ({ page }, testInfo) => {
    const logger = createLogger(testInfo);
    const login = new LoginPage(page, logger);
    const dashboard = new DashboardPage(page, logger);

    try {
      await logger.step("Open Login Page", async () => {
        await login.goto();
      });

      await logger.step("Login with valid credentials", async () => {
        await login.login(mustGetEnv("VALID_USERNAME"), mustGetEnv("VALID_PASSWORD"));
      });

      await logger.step("Validate successful login", async () => {
        await dashboard.assertLoggedIn();
      });
    } finally {
      await logger.attachToReport();
    }
  });

  for (const data of invalidLoginCases) {
    test(`Invalid login - ${data.name} @smoke`, async ({ page }, testInfo) => {
      const logger = createLogger(testInfo);
      const login = new LoginPage(page, logger);

      try {
        await logger.step("Open Login Page", async () => {
          await login.goto();
        });

        await logger.step(`Attempt login: ${data.name}`, async () => {
          await login.login(data.username, data.password);
        });

        await logger.step("Validate error message", async () => {
          await login.assertLoginFailed(data.expectedError);
        });
      } finally {
        await logger.attachToReport();
      }
    });
  }
});