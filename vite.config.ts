import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 8080,
    strictPort: false,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
})
