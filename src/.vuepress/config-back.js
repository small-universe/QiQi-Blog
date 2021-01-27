// 更新
const update = require('./update')
// 导航栏
const navBarConfig = require("./navBar");
// 侧边栏
const sideBarConfig = require("./sideBar");

const { config: configBack } = require("vuepress-theme-hope");

module.exports = configBack({
  logo: '/logo.png',
  title: "七七部落",
  author: "nanci",
  description: "南辞 | 技术博文",
  base: "/QiQi-Blog/",
  dest: "./dist",

  // remove this if you are not using Vue and React in "markdownEnhance: code demo"
  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  extraWatchFiles: [".vuepress/navBar.js", ".vuepress/sideBar.js"],
  locales: {
    "/zh/": {
      title: "七七部落",
      description: "南辞 | 技术博文",
    },
  },

  /**
   *  主题配置
   **/
  themeConfig: {
    logo: '/logo.png',
    hostname: "http://qiqi.dreamagain.top/",
    // 导航栏
    nav: navBarConfig.blog,
    // 侧边栏
    sidebar: sideBarConfig.blog,
    // 默认语言
    baseLang: 'zh-CN',
    // 主题的多语言切换
    // locales: {
    // },
    // 主题颜色
    themeColor:{
      blue: '#2196f3',
      red: '#ec3434',
      green: '#3eaf7c',
      orange: '#f1972a'
    },

    // 博客配置
    blog: {
      intro: "/intro/",//个人介绍地址
      sidebarDisplay: "mobile", //移动视图中显示在侧边栏
      blogger: "nanci", //博主名
      avatar: "/avatar.jpg",//头像
      links: {
        Zhihu: "https://zhihu.com",
        Baidu: "https://baidu.com",
        Github: "https://github.com",
      },
      timeline:"昨日不再",//时间轴的顶部文字
      perPage: 10,//每页文章数量
    },

    // 评论 type可选
    comment: {
      type: "valine",
      appId: process.env.LEANCLOUD_APP_ID,
      appKey: process.env.LEANCLOUD_APP_KEY,
    },

    // 版权
    copyright: {
      status: "global",
    },

    // 页脚
    footer: {
      display: true,
      content: "七七部落 | 备案号 滇ICP备20004889-1",
      copyright: "Copyright © 2021 Mr.Yang", // 覆盖默认
    },

    // markdown扩展
    mdEnhance: {
      // please only enable the features you need
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    // PWA设置（渐进式的网页应用程序）
    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

    // 搜索配置
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
    },

    // 项目地址
    repo: "https://github.com/small-universe/QiQi-Blog",

    //repoLabel: "Github", //仓库标签文字,自动解析

    repoDisplay: false,

    // docsDir: "docs/theme/src",

    docsBranch: "qiqi-page"
  },
});
