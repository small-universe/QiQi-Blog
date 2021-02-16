module.exports = [
  "",
  {
    title: "简介",
    path: "intro/",
    collapsable: false,
    prefix: "intro/",
    children: ["intro", "history", "language", "advantage", "desktop"],
  },
  {
    title: "文件结构",
    path: "file/",
    collapsable: false,
    prefix: "file/",
    children: ["file", "dir", "mount"],
  },
  {
    title: "命令",
    path: "command/",
    prefix: "command/",
    collapsable: false,
    children: ["command", "dir", "file", "other", "add", "excu", "path", "ln"],
  },
  {
    title: "Bash",
    path: "bash/",
    prefix: "bash/",
    collapsable: false,
    children: [
      "intro",
      "grammar",
      "expansion",
      "quotation",
      "variable",
      "string",
      "arithmetic",
      "readline",
      "stack",
      "script",
      "read",
      "condition",
      "loop",
      "function",
      "array",
      "set",
      "debug",
      "mktemp",
      "startup",
      "prompt",
    ],
  },
  {
    title: "ubuntu",
    path: "ubuntu/",
    prefix: "ubuntu/",
    collapsable: false,
    children: ["manage", "debug", "webserver", "lang"],
  },
  "centos",
  "WSL",
  "ssh",
];
