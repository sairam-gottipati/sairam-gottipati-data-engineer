import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync } from 'node:fs';

export default defineConfig({
  plugins: [react()],
  base: '/sairam-gottipati-data-engineer/',
  define: {
    __HAS_RESUME__: existsSync(new URL('./public/resume.pdf', import.meta.url)),
  },
});
