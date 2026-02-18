import { Page, Locator, expect } from "@playwright/test";
import type { Logger } from "../utils/logger";

export class DashboardPage {
    readonly page: Page;
    readonly logger: Logger;

    readonly logoutBtn: Locator;
    readonly flashMsg: Locator;

    constructor(page: Page, logger: Logger) {
        this.page = page;
        this.logger = logger;

        this.logoutBtn = page.locator('//a[text()="Log out"]');
        this.flashMsg = page.locator('//h1[@class="post-title"]');
    }


    async assertLoggedIn() {
        this.logger.info("Wait for user profile API to complete");
        // await this.page.waitForResponse(resp =>
        //     resp.url().includes('/api/me') && resp.status() === 200
        // );

        this.logger.info("Assert verified URL link");
        await expect(this.page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')

        this.logger.info("Assert success flash message");
        await expect(this.flashMsg).toContainText("Logged In Successfully");

        this.logger.info("Assert logout button visible");
        await expect(this.logoutBtn).toBeVisible();
    }

    async logout() {
        this.logger.info("Click logout button");
        await this.logoutBtn.click();
    }
}