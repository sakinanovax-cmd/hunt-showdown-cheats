/**
 * Cloudflare Worker fronting static assets.
 * - www → apex 301
 * - ensure HTML responses declare charset=UTF-8
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.huntcheats.com" || url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.replace(/^www\./, "");
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("text/html") && !/charset=/i.test(contentType)) {
      const headers = new Headers(response.headers);
      headers.set("Content-Type", "text/html; charset=UTF-8");
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return response;
  },
};
