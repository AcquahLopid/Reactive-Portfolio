const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/submit-form',
    createProxyMiddleware({
      target: 'http://localhost:3001', //  Node.js server
      changeOrigin: true,
    })
  );
};
