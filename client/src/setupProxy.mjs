import { createProxyMiddleware } from 'http-proxy-middleware';

export function setupProxy(app) {
  app.use(
    'http://localhost:8800/api/', // O caminho da API que deseja redirecionar
    createProxyMiddleware({
      target: 'http://localhost:8800', // URL do seu backend
      changeOrigin: true,
    })
  );
};