import { test } from "../fixtures/authFixtures";
import { expect } from "@playwright/test";
import { loginPayload } from "../../src/utils/testAPIDataFactory";

test.describe("@api @smoke Login API", () => {
  test("Valid login returns token", async ({ authClient }) => {
    const { body } = await authClient.login(
      loginPayload().username,
      loginPayload().password
    );
    expect(body).toHaveProperty("token");
    expect(typeof body.token).toBe("string");
  });

  test("Invalid login returns error", async ({ authClient }) => {
    const { status, body } = await authClient.login("wrong", "wrong");
    expect(
      status === 401 ||
        (status === 200 && (typeof body === "string" ? body.includes("incorrect") : !body.token))
    ).toBeTruthy();
  });
});