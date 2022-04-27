import {UserConfig, viteBundler} from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

// import type { WebpackBundlerOptions } from '@vuepress/bundler-webpack'
import * as path from 'path'
import {navbar} from "./configs/navbar";
import {sidebar} from "./configs/sidebar";
// import {Configuration, ProvidePlugin} from 'webpack'
// import {merge} from 'webpack-merge'

const config: UserConfig = {
  lang: 'en-US',
  title: 'Unique docs',
  description: 'Unique network documentation portal',
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],

  port: 3000,

  dest: `./dist`,
  public: './public',

  alias: {
    '_utils': path.resolve(__dirname, './utils'),
    '_components': path.resolve(__dirname, './components'),
  },

  // theme and its config
  theme: defaultTheme({
    logo: '/images/logo/unique.svg',
    contributors: false,
    locales: {
      '/': {
        navbar: navbar.en,
        sidebar: sidebar.en,
      }
    },
  }),
  // extendsMarkdown: (md: any) => {md.set({breaks: true})},
  plugins: [
    [
      registerComponentsPlugin({componentsDir: path.resolve(__dirname, './components')})
    ]
  ],


  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          process: 'process',
          'readable-stream': 'vite-compatible-readable-stream',
          zlib: "browserify-zlib",
          util: 'util',
          https: 'https-browserify',
          http: 'stream-http',
          crypto: 'crypto-browserify',
          assert: 'assert',
          url: 'url',
          os: 'os-browserify',
        }
      }
    }
  })
}

export default config
