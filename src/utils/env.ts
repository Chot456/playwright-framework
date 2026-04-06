export const loadEnv = () => {
  try {
    require("dotenv").config();
  } catch {
    // dotenv not installed or not needed
  }
};

export const mustGetEnv = (name: string): string => {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
};