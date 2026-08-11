import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If you deploy to GitHub Pages under a repo name (not a custom domain
  // or username.github.io root), uncomment and set this to '/your-repo-name/'
  // base: '/your-repo-name/',
})
