module.exports = [
  "",
  {
    title: "小程序教程",
    collapsable: false,
    prefix: "guide/",
    children: require("./guide"),
  },
  {
    title: "开发者工具",
    collapsable: false,
    prefix: "tools/",
    children: ["", "interface", "debug", "npm", "audit"],
  },
  {
    title: "小程序框架",
    collapsable: false,
    prefix: "framework/",
    children: ["", "simple-debug", "tag-list", "corporation", "page", "demo"],
  },
  "qr-code",
];
