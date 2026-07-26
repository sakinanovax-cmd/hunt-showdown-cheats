/**
 * Cloudflare Worker fronting static assets.
 * Forces www → apex so crawlers do not treat both hosts as duplicate sites.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.huntcheats.com") {
      url.hostname = "huntcheats.com";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
