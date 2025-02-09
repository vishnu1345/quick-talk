const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://127.0.0.1:3000",
      changeOrigin: true,
      secure: false, // Accept self-signed certificates
    })
  );
};
