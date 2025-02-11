import { defineConfig } from "vite";
import defineOptions from "unplugin-vue-define-options/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [ defineOptions()],
});
