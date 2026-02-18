import { APIRequestContext, expect } from "@playwright/test";

export class PostClient {
  constructor(private request: APIRequestContext, private baseUrl: string) {}

  async getPosts() {
    const res = await this.request.get(`${this.baseUrl}/posts`);
    expect(res.status()).toBe(200);
    return res.json();
  }

  async getPost(id: number) {
    const res = await this.request.get(`${this.baseUrl}/posts/${id}`);
    expect(res.status()).toBe(200);
    return res.json();
  }

  async createPost(title: string, body: string, userId: number) {
    const res = await this.request.post(`${this.baseUrl}/posts`, {
      data: { title, body, userId },
    });
    expect(res.status()).toBe(201);
    return res.json();
  }

  async updatePost(id: number) {
    const res = await this.request.put(`${this.baseUrl}/posts/${id}`, {
      data: {
        id,
        title: "foo",
        body: "bar",
        userId: 1,
      },
    });
    expect(res.status()).toBe(200);
    return res.json();
  }

  async patchPost(id: number) {
    const res = await this.request.patch(`${this.baseUrl}/posts/${id}`, {
      data: { title: "patched title" },
    });
    expect(res.status()).toBe(200);
    return res.json();
  }

  async deletePost(id: number) {
    const res = await this.request.delete(`${this.baseUrl}/posts/${id}`);
    expect(res.status()).toBe(200);
  }
}