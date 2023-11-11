import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: `import * as React from 'react'`,
    jsx: 'react',
    // Add the following line:
    throwIfNamespace: false,
  },
})

