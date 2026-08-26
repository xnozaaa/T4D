type RateLimitEntry = { count: number; resetAt: number };
type GuardOptions = {
  scope: string;
  limit: number;
  maxBodyBytes: number;
  windowMs?: number;
};

const globalStore = globalThis as typeof globalThis & {
  __t4dRateLimits?: Map<string, RateLimitEntry>;
};
const rateLimits =
  globalStore.__t4dRateLimits ??
  (globalStore.__t4dRateLimits = new Map<string, RateLimitEntry>());

function clientIp(request: Request) {
  return (
    request.headers.get("x-vercel-forwarded-for") ??
    request.headers.get("x-forwarded-for")?.split(",")[0] ??
    "unknown"
  ).trim();
}

export function guardPublicPost(
  request: Request,
  { scope, limit, maxBodyBytes, windowMs = 15 * 60 * 1000 }: GuardOptions,
) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) {
        return { status: 403, error: "Request not allowed." };
      }
    } catch {
      return { status: 403, error: "Request not allowed." };
    }
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maxBodyBytes) {
    return { status: 413, error: "Request is too large." };
  }

  const now = Date.now();
  const key = `${scope}:${clientIp(request)}`;
  const current = rateLimits.get(key);
  if (!current || current.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + windowMs });
  } else if (current.count >= limit) {
    return { status: 429, error: "Too many requests. Please try again later." };
  } else {
    current.count += 1;
  }

  if (rateLimits.size > 2_000) {
    for (const [entryKey, entry] of rateLimits) {
      if (entry.resetAt <= now) rateLimits.delete(entryKey);
    }
  }
  return null;
}

export function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  const cleaned = value.trim();
  if (cleaned.length > maxLength) throw new Error("INVALID_INPUT");
  return cleaned;
}

export function isValidEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
