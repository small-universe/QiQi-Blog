const sidebar = require('./config/sidebar')
const nav = require('./config/navbar')

module.exports = {
  host: "127.0.0.1", // 生成网页地址（本地调试使用）
  port: "8070", // 生成网页端口（本地调试使用）
  title: "七七算法", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  author: "南辞",
  description: "qiqi-tribe’s subject:qiqi-algorithm", // meta 中的描述文字，用于SEO
  // base: "/qiqi-algorithm/",

  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }], //浏览器的标签栏的网页图标,基地址/.vuepress/public
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ], //在移动端，搜索框在获得焦点时会放大
  ],
  theme: "reco", //选择主题‘reco’
  themeConfig: {
    type: "blog", //选择类型博客
    fullscreen: true,
    logo: '/favicon.svg', // 导航栏左侧可以显示logo
    nav, //导航栏设置
    sidebar, //侧边栏
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
      socialLinks: [ // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/small-universe" },
        { icon: "reco-qq", link: "tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=1715261428" },
        { icon: "reco-mail", link: "mailto:18846770224@163.com" },
        { icon: "reco-mayun", link: "https://gitee.com/small-universe" },
        { icon: "reco-csdn", link: "https://blog.csdn.net/qq_39839033/"  },
      ],
    },
    // displayAllHeaders: true, // 默认值：false
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
      // ...
    ],

    record: "滇ICP备20004889号-1",
    recordLink: "https://icp.chinaz.com/home/info?host=dreamagain.top",
    // cyberSecurityRecord: "全国互联网安全管理服务平台",
    // cyberSecurityLink:
    //   "http://www.beian.gov.cn/portal/registerSystemInfo",
    startYear: "2021", // 项目开始时间，只填写年份
    lastUpdated: "最后更新时间", // string | boolean
    author: "南辞",
    authorAvatar: "/avatar.jpg", //作者头像
    mode: "light", //默认显示白天模式
    // 代码主题
    // 'default'、'funky'、'okaidia'、'solarizedlight'、'tomorrow'
    // 默认是 'tomorrow'
    codeTheme: "tomorrow",
    smooth: "true", //平滑滚动

    // 评论设置,结合github actions使用，避免暴露个人重要信息
    valineConfig: {
      appId: process.env.LEANCLOUD_APP_ID,
      appKey: process.env.LEANCLOUD_APP_KEY,
    },
  },
  markdown: {
    lineNumbers: true, //代码显示行号
  },
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 插件
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-rss", //RSS插件
      {
        site_url: "http://algorithm.dreamagain.top", //网站地址
        copyright: "nanci", //版权署名
      },
    ],
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    ["vuepress-plugin-code-copy", true], //一键复制代码插件
  ],
};
