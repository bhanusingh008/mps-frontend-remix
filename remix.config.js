/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "vercel",
  future: {
    v2_routeConvention: true,
  },
  ignoredRouteFiles: ["**/.*"],
};
