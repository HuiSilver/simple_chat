import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';
import sassDts from 'vite-plugin-sass-dts';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(),sassDts()],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, './src/images'),
    },
  },
})
