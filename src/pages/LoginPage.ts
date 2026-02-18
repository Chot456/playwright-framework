import { Page, Locator, expect } from "@playwright/test"
import type { Logger } from "../utils/logger";

export class LoginPage {
    readonly page: Page;
    readonly logger: Logger;
    readonly username: Locator;
    readonly password: Locator;
    readonly LoginBtn: Locator;
    readonly flasMsg: Locator;

    constructor(page: Page, logger: Logger) {
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.LoginBtn = page.locator("#submit");
        this.flasMsg  = page.locator("#error");
        this.logger = logger;
    }

    async goto() {
        this.logger.info("Navigate to Login page", { path: "/login" });
        await this.page.goto("/practice-test-login/");
    }

    async login(user: string, pass: string) {
        this.logger.info("Fill username");
        await this.username.fill(user);

        this.logger.info("Fill password");
        await this.password.fill(pass);

        this.logger.info("Click login button");
        await this.LoginBtn.click();
    }

    async assertLoginFailed(message: string) {
        this.logger.info("Assert login failed message is visible");
        await expect(this.flasMsg).toBeVisible();

        this.logger.info("Assert error text contains expected message");
        await expect(this.flasMsg).toContainText(message);
    }
}


