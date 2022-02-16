import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000/',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    viteMockServe({
      // default
      mockPath: 'mock',
      localEnabled: true,
      supportTs: false
    })
  ]
});
