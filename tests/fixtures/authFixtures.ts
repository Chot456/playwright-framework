import { test as base } from "@playwright/test";
import { AuthClient } from "../../src/api/authClient";
import { mustGetEnv } from "../../src/utils/env";
 
export const test = base.extend<{ authClient: AuthClient }>({
  authClient: async ({ request }, use) => {
    const baseUrl = mustGetEnv("API_LOGIN_BASE_URL");
    await use(new AuthClient(request, baseUrl));
  },
});