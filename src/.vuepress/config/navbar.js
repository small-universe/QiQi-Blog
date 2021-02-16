module.exports = {
  zh: [
    { text: "主页", link: "/", icon: "home" },
    { text: "博客", link: "/blog/", icon: "blog" },
    {
      text: "学习笔记",
      icon:'program',
      prefix: "/program/",
      items: [
        { text: "快速导航", link: "", icon: "quick" },
        {
          text: "后端",
          items: [
            { text: "学习指南", link: "backend/", icon: "guide" },
            { text: "Java", link: "backend/java/", icon: "java" },
            // { text: "Python", link: "backend/python/", icon: "python",},
          ],
        },
        // {
        //   text: "前端",
        //   items: [
        //     { text: "学习指南", link: "frontend/", icon: "guide" },
        //     { text: "HTML", link: "language/html/", icon: "html" },
        //     { text: "CSS", link: "language/css/", icon: "css" },
        //     { text: "JavaScript", link: "language/js/", icon: "javascript" },
        //     { text: "TypeScript", link: "language/typescript/", icon: "typescript",},
        //     { text: "小程序", link: "mini-app/", icon: "mini-app",},
        //   ],
        // },
      ],
    },
    // {
    //   text: "框架",
    //   icon: "framework",
    //   items: [
    //     {
    //       text: '后端',
    //       prefix: "/program/backframe/",
    //       items:[
    //         { text: "Spring家族", link: "spring", icon: "spring" },
    //         { text: "ORM框架", link: "orm", icon: "orm" },
    //       ]
    //     },
    //     {
    //       text: "前端",
    //       prefix: "/program/webframe/",
    //       items: [
    //         { text: 'Vue', link: 'vue/', icon: "vue"},
    //         { text: 'React', link: 'react/', icon: "react"},
    //         { text: 'Angular', link: 'angular/', icon: "angular"}
    //       ],
    //     },
    //
    //   ],
    // },
    {
      text: "专题",
      icon:'subject',
      items: [
        { text: "算法", link: "http://algorithm.dreamagain.top/", icon: "algorithm" },
        { text: "文档", link: "/docs/", icon: "docs" },
      ],
    },
    // {
    //   text: "软件教程",
    //   icon: "software",
    //   prefix: "/software/",
    //   items: [
    //     {
    //       text: "工具&插件",
    //       items: [
    //         { text: "指南", link: "", icon: "guide" },
    //         { text: "VS Code", link: "vscode/", icon: "vscode" },
    //         { text: "Git", link: "git/", icon: "git" },
    //         { text: "IDEA", link: "idea/", icon: "intellijidea" },
    //       ],
    //     },
    //     {
    //       text: "系统软件",
    //       items: [
    //           { text: "Linux", link: "linux/", icon: "linux" },
    //           { text: "Windows", link: "Windows/", icon: "windows" }
    //       ],
    //     },
    //   ],
    // },
  ],
  en: [
    { text: "Home", link: "/en/", icon: "home" },
  ],
};
