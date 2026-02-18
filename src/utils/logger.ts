import type { TestInfo } from "@playwright/test";

type LogLevel = "INFO" | "WARN" | "ERROR";

export type Logger = {
  info: (msg: string, meta?: unknown) => void;
  warn: (msg: string, meta?: unknown) => void;
  error: (msg: string, meta?: unknown) => void;
  step: <T>(name: string, fn: () => Promise<T>) => Promise<T>;
  attachToReport: () => Promise<void>;
};

function now() {
  return new Date().toISOString();
}

function format(level: LogLevel, msg: string, meta?: unknown) {
  const metaStr =
    meta === undefined ? "" : ` | meta=${JSON.stringify(meta, null, 0)}`;
  return `${now()} | ${level} | ${msg}${metaStr}`;
}

export function createLogger(testInfo: TestInfo): Logger {
  const buffer: string[] = [];

  const write = (level: LogLevel, msg: string, meta?: unknown) => {
    const line = format(level, msg, meta);
    buffer.push(line);

    // Console output (visible in CI logs)
    // eslint-disable-next-line no-console
    console.log(line);
  };

  return {
    info: (msg, meta) => write("INFO", msg, meta),
    warn: (msg, meta) => write("WARN", msg, meta),
    error: (msg, meta) => write("ERROR", msg, meta),

    step: async (name, fn) => {
      write("INFO", `STEP START: ${name}`);
      try {
        const result = await fn();
        write("INFO", `STEP END: ${name}`);
        return result;
      } catch (err) {
        write("ERROR", `STEP FAIL: ${name}`, {
          error: err instanceof Error ? err.message : String(err),
        });
        throw err;
      }
    },

    attachToReport: async () => {
      await testInfo.attach("execution-log", {
        body: buffer.join("\n"),
        contentType: "text/plain",
      });
    },
  };
}