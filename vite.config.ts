import { ConfigEnv, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import { resolve } from "path";
import copy from "rollup-plugin-copy";

const root = process.cwd();

const pathResolve = (dir: string) => resolve(root, ".", dir);

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  return {
    resolve: {
      alias: resolveAlias,
    },
    server: {
      host: true, // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
      port: 36100,
      strictPort: true, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
      // 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      hmr: {
        overlay: true,
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    css: {
      //* css模块化
      modules: {
        // css模块化 文件以.module.[css|less|scss]结尾
        generateScopedName: "[name]__[local]___[hash:base64:5]",
        hashPrefix: "prefix",
      },
      preprocessorOptions: {
        less: {
          modifyVars: {
            // 用于全局导入，以避免需要单独导入每个样式文件。
            // reference:  避免重复引用
            hack: `true; @import (reference) "${resolve(
              "src/styles/config.less"
            )}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      vue(),
      federation({
        name: "sts-parent",
        filename: "StsParent.js",
        exposes: {},
        shared: ["vue", "vue-router"],
      }),
      copy({
        targets: [
          {
            src: "dist/assets",
            dest: "public",
          },
        ],
        hook: "writeBundle", // notice here
      }),
    ],
    build: {
      target: "esnext",
      minify: false,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          minifyInternalExports: false,
        },
      },
    },
  };
};

const resolveAlias = [
  {
    find: /\/@\//,
    replacement: pathResolve("src") + "/",
  },
];
