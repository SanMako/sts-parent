import { ConfigEnv, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import { resolve } from "path";
import pkg from "./package.json";
import copy from "rollup-plugin-copy";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

const root = process.cwd();

const pathResolve = (dir: string) => resolve(root, ".", dir);

const { dependencies, devDependencies, name, version } = pkg;

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  return {
    // 项目根目录（index.html 文件所在的位置）。可以是一个绝对路径，或者一个相对于该配置文件本身的相对路径。
    root: root,
    /**
     * 开发或生产环境服务的公共基础路径。合法的值包括以下几种：
     *   -> 绝对 URL 路径名，例如 /foo/
     *   -> 完整的 URL，例如 https://foo.com/
     *   -> 空字符串或 ./（用于开发环境）
     */
    base: "/",
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
    define: {
      // setting vue-i18n-next
      // Suppress warning
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__),
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
        exposes: {
          "./StsButton": "./src/components/button",
          "./StsForm": "./src/components/form",
          "./StsInput": "./src/components/input",
        },
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
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [pathResolve("src/assets/svg")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]",
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

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: "YYYY-MM-DD HH:mm:ss",
};
