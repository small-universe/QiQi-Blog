const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./config/navbar");
const sideBarConfig = require("./config/sideBar");
const privateConfig = require("./config/private");

module.exports = config({
  title: "七七部落",
  logo: "/logo.svg",
  description: "Actions speak louder than words.",
  base:"/QiQi-Blog",
  dest: "dist",

  head: [
    // 百度站点验证
    ["meta", { name: "baidu-site-verification", content: "nGf5yi0Gec" }],
    ["meta", { name: "baidu-site-verification", content: "4H7tszevS8" }],

    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],

  shouldPrefetch: (filename) => !filename.includes("page-"),

  themeConfig: {
    baseLang: "zh-CN",
    logo: "/logo.png",
    nav: navBarConfig.zh,
    sidebar: sideBarConfig.zh,
    author: "南辞",
    backToTop: false, // 回到顶部（用小喵代替）
    editLinks: false, // 显示编辑本页链接（全局不显示）

    locales: {
      /** 英文设置 */
      "/en/": {
        nav: navBarConfig.en,
        sidebar: sideBarConfig.en,
      },
    },

    blog: {
      intro: "/about/intro.html",//个人介绍地址
      sidebarDisplay: "mobile",
      blogger: "南辞", //博主名
      avatar: "/avatar.jpg",//头像
      links: {
        Zhihu: "https://zhihu.com/people/qiqiblog",
        Github: "https://github.com/small-universe",
        Gitee:'https://gitee.com/small-universe',
        QQ:"tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=1715261428",
        Gmail:"mailto:18846770224@163.com",
      },
      timeline:"昨日不再", // 时间轴的顶部文字
      perPage: 10, //每页文章数量
    },

    copyright: {
      status: "global",
    },

    mdEnhance: {
      enableAll: true,
    },

    comment: {
      type: "valine",
      appId: privateConfig.valine.AppID,
      appKey: privateConfig.valine.AppKey,
    },

    // 页脚
    footer: {
      display: true,
      content:"<a href='http://qiqi.dreamagain.top'>七七部落 </a>" +
          "| <a href='http://www.beian.gov.cn/portal/index.do'>备案号:滇ICP备20004889号-1</a> " +
          "<a href='http://www.dreamagain.top'> | 七七博客</a>",
      copyright: "Copyright © 2021 Mr.Yang",
    },

    hostname: "http://qiqi.dreamagain.top",

    // 搜索配置
    searchPlaceholder: "Search...",
    algolia: {
      apiKey: "",
      indexName: "",
    },


    lastUpdate: {
      timezone: "Asia/Shanghai",
    },

    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#5c92d1",
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        name: "七七部落",
        short_name: "QiQi Tribe",
        description: "南辞 个人博客",
        theme_color: "#5c92d1",
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "分类",
            short_name: "分类",
            icons: [
              {
                src: "/assets/icon/category-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/category-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/category/",
            description: "文章分类分组",
          },
          {
            name: "标签",
            short_name: "标签",
            icons: [
              {
                src: "/assets/icon/tag-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/tag-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/tag/",
            description: "文章标签分组",
          },
          {
            name: "时间线",
            short_name: "时间线",
            icons: [
              {
                src: "/assets/icon/timeline-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/timeline-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/timeline/",
            description: "时间线文章列表",
          },
          {
            name: "个人介绍",
            short_name: "个人介绍",
            icons: [
              {
                src: "/assets/icon/about-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/about-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/about/",
            description: "个人介绍",
          },
        ],
      },
      cacheHTML: false,
      maxSize: 2048,
    },

    repo: "https://github.com/small-universe/QiQi-Blog",
    repoDisplay: false,
    repoLabel: "Github",
    docsDir: "src",
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
        // metingApi: 'https://meting.sigure.xyz/api/music',
        meting: {
          server: 'netease',//网易云
          type: 'playlist',
          mid: '5306071955',
        },
        aplayer: {
          mini: true,
          fixed: true,
          lrcType: 0,//歌词解析模式(禁用歌词)
        },
      },
    ],
    // 页面加载
    ['loading-page'],
    // 其他自定义组件
    // common_plugin
  ],
});
