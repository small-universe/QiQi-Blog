module.exports = [
  "",
  "editor",
  "vscode/",
  "git/",
  "git/github/",
  {
    title: "工具软件",
    collapsable: false,
    prefix: "tool/",
    children: [
      "",
      "power-toys",
      "powershell",
      {
        title: "Terminal",
        path: "terminal/",
        collapsable: false,
        prefix: "terminal/",
        children: ["get-started", "settings"],
      },
    ],
  },
];
