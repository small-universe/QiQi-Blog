// 导航栏
const navBarConfig = require("./navBar");
// 侧边栏
const sideBarConfig = require("./sideBar");

const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "七七博客",
  logo: "/logo.svg",
  description: "欢迎一起交流学习✨",

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

  // 进入主页
  locales: {
    "/": {
      title: "七七部落",
      description: "南辞 | 学习成长之路",
    },
  },

  themeConfig: {
    logo: '/logo.png',
    hostname: "http://qiqi.dreamagain.top/",
    author: "南辞",
    iconPrefix: "icon-",
    nav: navBarConfig.blog,
    sidebar: sideBarConfig.blog,
    backtotop: false,
    mdEnhance: {
      enableAll: true,
    },
    baseLang:"zh-CN",

    // 评论 type可选
    comment: {
      type: "valine",
      appId: process.env.LEANCLOUD_APP_ID,
      appKey: process.env.LEANCLOUD_APP_KEY,
    },

    // 页脚
    footer: {
      display: true,
      content:"七七部落 " +
          "| <a href='http://www.beian.gov.cn/portal/index.do'>备案号:滇ICP备20004889-1号</a> " +
          "<a href='http://www.dreamagain.top'> | 锦鲤博客</a>",
      copyright: "Copyright © 2021 Mr.Yang",
    },

    // 搜索配置
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
    },
    searchPlaceholder: "Search...",

    // 博客配置
    blog: {
      intro: "/intro/",//个人介绍地址
      sidebarDisplay: "mobile",
      blogger: "nanci", //博主名
      avatar: "/avatar.jpg",//头像
      links: {
        Zhihu: "https://zhihu.com/people/qiqiblog",
        Github: "https://github.com/small-universe",
        QQ:"tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=1715261428",
        Gmail:"mailto:18846770224@163.com",
      },
      // timeline:"昨日不再",//时间轴的顶部文字
      perPage: 10,//每页文章数量
    },

    // 版权
    copyright: {
      status: "global",
    },

    // 项目地址
    repo: "https://github.com/small-universe/QiQi-Blog",
    repoDisplay: false,
    // docsDir: "",

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

    // 主题颜色
    themeColor:{
      blue: '#2196f3',
      red: '#ec3434',
      green: '#3eaf7c',
      orange: '#f1972a'
    },
  },

  // 插件配置
  plugins: [
    // 樱花插件
    ["sakura", {
      num: 15,  // 默认数量
      show: true, //  是否显示
      zIndex: 1365,   // 层级
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '...'     // 绝对路径
      }
    }],
    // 加载进度条
    ['@vuepress/nprogress'],
    // 阅读进度条
    ['reading-progress'],
    // 彩带背景
    [
      'ribbon-animation',
      {
        size: 60,   // 默认数据90
        opacity: 0.2,  //  透明度
        zIndex: -1,   //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true  // 滑动彩带
      }
    ],
    // 鼠标特效插件
    [
      'cursor-effects',
      {
        size: 1.75,
        shape: 'star',
      },
    ],
    // 悬挂小猫返回顶部
    ['go-top',true],
    // Meting 音乐播放插件
    [
      'meting',
      {
        meting: {
          server: 'netease',//网易云
          type: 'playlist',
          mid: '5306071955',
        },
        // aplayer: {
        //     lrcType: 3,//歌词解析模式
        // },
      },
    ],
    // 页面加载
    ['loading-page'],
    // 其他自定义插件
    // common_plugin
  ],
});
