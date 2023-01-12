import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'url'

// https://vitest.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  plugins: [vue(), vueJsx()],
  test: {
    environment: 'happy-dom',
    globals: true,
    includeSource: ['./**/*.{js,ts}'],
    setupFiles: ['src/test/NuxtMocks.ts'],
    coverage: {
      reporter: ['lcov', 'json', 'html', 'text'],
    }
  }
})
