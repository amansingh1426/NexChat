import { ENV } from "./env.js";

const DEV_LOCAL_HOSTS = new Set(["localhost", "127.0.0.1"]);

export const isAllowedOrigin = (origin) => {
  // Non-browser requests (no Origin header) are allowed.
  if (!origin) return true;

  if (ENV.CLIENT_URL && origin === ENV.CLIENT_URL) {
    return true;
  }

  if (ENV.NODE_ENV !== "production") {
    try {
      const url = new URL(origin);
      return DEV_LOCAL_HOSTS.has(url.hostname);
    } catch {
      return false;
    }
  }

  return false;
};

export const corsOriginHandler = (origin, callback) => {
  if (isAllowedOrigin(origin)) {
    return callback(null, true);
  }

  return callback(new Error(`Origin not allowed by CORS: ${origin}`));
};
