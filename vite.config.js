
import path from 'path';



const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './www',);
export default async () => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');
  return  {
    plugins: [
      svelte(),

    ],
    root: SRC_DIR,
    base: process.env.NODE_ENV === "production" ? "/bgscorer-svelte/" : "/",
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: true,
      rollupOptions: {
        treeshake: false,
      },
    },
    resolve: {
      alias: {
        '@': SRC_DIR,
      },
    },
    server: {
      host: true,
    },

  };
}
