import { mustGetEnv } from "./env";

export const loginPayload = (overrides?: Partial<{ username: string; password: string }>) => ({
  username: overrides?.username ?? mustGetEnv("API_LOGIN_VALID_USERNAME"),
  password: overrides?.password ?? mustGetEnv("API_LOGIN_VALID_PASSWORD"),
});