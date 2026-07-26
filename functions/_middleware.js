export async function onRequest(context) {
  // Pull credentials from Cloudflare Environment Variables
  const AUTH_USER = context.env.AUTH_USER || "viewer";
  const AUTH_PASS = context.env.AUTH_PASS;

  // If no password variable is configured in Cloudflare, allow access
  if (!AUTH_PASS) {
    return context.next();
  }

  const authorization = context.request.headers.get("Authorization");

  if (authorization) {
    const [scheme, encoded] = authorization.split(" ");
    if (scheme === "Basic" && encoded) {
      const credentials = atob(encoded);
      const index = credentials.indexOf(":");
      const user = credentials.substring(0, index);
      const pass = credentials.substring(index + 1);

      // Verify credentials
      if (user === AUTH_USER && pass === AUTH_PASS) {
        return context.next();
      }
    }
  }

  // Prompt browser native login dialog
  return new Response("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area", charset="UTF-8"',
    },
  });
}