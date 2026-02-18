import { test, expect } from "@playwright/test";
import { PostClient } from "../../src/api/postClient";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const mustGetEnv = (name: string) => {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
};

test.describe("@api Post API", () => {

  test("GET all posts", async ({ request }) => {
    const api = new PostClient(request, mustGetEnv("API_BASE_URL"));

    const posts = await api.getPosts();
    expect(posts.length).toBeGreaterThan(0);
  });


  test("GET single post", async ({ request }) => {
    const api = new PostClient(request, mustGetEnv("API_BASE_URL"));

    const post = await api.getPost(1);
    expect(post).toHaveProperty("title");
  });


  test("CREATE post", async ({ request }) => {
    const api = new PostClient(request, mustGetEnv("API_BASE_URL"));

    const created = await api.createPost(
      "Playwright Title",
      "Playwright Body",
      1
    );

    expect(created.title).toBe("Playwright Title");
  });


  test("UPDATE post (PUT)", async ({ request }) => {
    const api = new PostClient(request, mustGetEnv("API_BASE_URL"));

    const updated = await api.updatePost(1);
    expect(updated.title).toBe("foo");
  });


  test("PATCH post", async ({ request }) => {
    const api = new PostClient(request, mustGetEnv("API_BASE_URL"));

    const patched = await api.patchPost(1);
    expect(patched.title).toBe("patched title");
  });


  test("DELETE post", async ({ request }) => {
    const api = new PostClient(request, mustGetEnv("API_BASE_URL"));

    await api.deletePost(1);
  });

});