import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`, // Inject React for JSX if needed
    loader: "jsx", // Set the loader for JSX
    include: /\.jsx?$/, // Apply the loader to .js and .jsx files
    exclude: /node_modules/, // Exclude node_modules
  },
});
