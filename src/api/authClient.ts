import type { APIRequestContext } from "@playwright/test";

export class AuthClient {
  constructor(private request: APIRequestContext, private baseUrl: string) {}

  async login(username: string, password: string) {
    const resp = await this.request.post(`${this.baseUrl}/auth/login`, {
      data: { username, password },
      headers: { "Content-Type": "application/json" },
    });
    const text = await resp.text();
    let body: any;
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }
    return { status: resp.status(), body };
  }
}