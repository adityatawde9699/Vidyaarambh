import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use VITE_BASE from env to support GitHub Pages repo subpath (e.g., /repo-name/)
const base = process.env.VITE_BASE || '/';

export default defineConfig({
    plugins: [react()],
    base,
}); 