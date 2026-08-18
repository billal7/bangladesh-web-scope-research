import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // change to '@vitejs/react-swc' if your template uses it

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bangladesh-web-scope-research/', // Crucial: This points to your GitHub repository subfolder
})
