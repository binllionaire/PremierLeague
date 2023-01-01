const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://kr.betsapi.com/lt/',
      changeOrigin: true,
    })
  );
};