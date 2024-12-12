import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
// import inject from '@rollup/plugin-inject'
// import adapter from 'webrtc-adapter'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  // define: {
  //   global: {},
  // },
  // server: {
  //   port: 3100,
  // }
});
