import { createCookie } from "@remix-run/node"; // or "@remix-run/cloudflare"

export const sessionToken = createCookie("sessionToken");
