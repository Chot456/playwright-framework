import { test } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { DashboardPage } from "../src/pages/DashboardPage";
import { creds } from "../src/utils/testData";
import { invalidLoginCases } from "../src/utils/testData";
import { createLogger } from "../src/utils/logger";

test.describe("Login POC", () => {
    test("Valid login @smoke", async ({ page }, testInfo) => {
        const logger = createLogger(testInfo);
        const login = new LoginPage(page, logger);
        const dashboard = new DashboardPage(page, logger);

        try {
            await logger.step("Open Login Page", async () => {
                await login.goto();
            });

            await logger.step("Perform login with valid credentials", async () => {
                await login.login(process.env.VALID_USERNAME!, process.env.VALID_PASSWORD!);
            });

            await logger.step("Validate successful login", async () => {
                await dashboard.assertLoggedIn();
            });

            // 🔹 Parameterized negative tests
            for (const data of invalidLoginCases) {

                test(`invalid login - ${data.name}`, async ({ page }) => {
                const login = new LoginPage(page, logger);

                await logger.step("Navigate to login page", async () => {
                    await login.goto();
                });

                await logger.step(`Attempt login: ${data.name}`, async () => {
                    await login.login(data.username, data.password);
                });

                await logger.step("Verify error message", async () => {
                    await login.assertLoginFailed(data.expectedError);
                });

                });

            }
        } finally {
            await logger.attachToReport();
        }
    });

    test("Invalid username login shows error", async ({ page }, testInfo) => {
        const logger = createLogger(testInfo);
        const login = new LoginPage(page, logger);

        try {
            await logger.step("Open Login Page", async () => {
                await login.goto();
            });

            await logger.step("Perform login with invalid credentials", async () => {
                await login.login(creds.invalid.username, creds.valid.password);
            });

            await logger.step("Validate login Failed", async () => {
                await login.assertLoginFailed("Your username is invalid!")
            });

        } finally {
            await logger.attachToReport();
        }
    });

    test("Invalid password login shows error", async ({ page }, testInfo) => {
        const logger = createLogger(testInfo);
        const login = new LoginPage(page, logger);

        try {
            await logger.step("Open Login Page", async () => {
                await login.goto();
            });

            await logger.step("Perform login with invalid credentials", async () => {
                await login.login(creds.valid.username, creds.invalid.password);
            });

            await logger.step("Validate login Failed", async () => {
                await login.assertLoginFailed("Your password is invalid!")
            });

        } finally {
            await logger.attachToReport();
        }
    });
});