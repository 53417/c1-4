const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com',
      changeOrigin: true,
    })
  );
};
