module.exports = {
  zh: {
//============================ 三级 =======================================
    "/program/backend/java/": require("./backend/java"),
    "/program/backend/python/": require("./backend/python"),

    "/program/frontend/node.js/": require("./frontend/node"),
    "/program/frontend/typescript/": require("./frontend/typescript"),
    "/program/frontend/js/": require("./frontend/javascript"),
    "/program/frontend/dart/": require("./frontend/dart"),
    "/program/frontend/jquery/": require("./frontend/jquery"),
    "/program/frontend/html/": require("./frontend/html"),
    "/program/frontend/css/": require("./frontend/css"),
    "/program/frontend/emmet/": require("./frontend/emmet"),


    "/program/webframe/vue/": require("./webframe/vue"),

//============================ 二级 ==================================
    "/program/Android/": ["", "intro", "base", "resource"],
    "/program/backend/": require("./backend"),
    "/program/mini-app/": require("./mini-app"),
    "/program/frontend/": require("./frontend"),


    "/software/vscode/": require("./software/vscode"),
    "/software/git/": require("./software/git"),
    "/software/linux/": require("./software/linux"),
    "/software/windows/": [
      "",
      "shortcut-key",
      "hidden-file",
      "add-path",
      "cmd",
      "notepad",
    ],

    "/interview/Java208/":require("./interview/Java208"),

//=========================== 一级 ==================================
    "/about/": ["intro", "site"],
    "/basic/":[""],
    "/program/": [
      "",
      "backend/",
      "frontend/",
      // "Android/",
      // "mini-app/",
    ],
    "/software/": require("./software"),
    "/interview/":[""],
    "/guide/":["vuepress","markdown","template","element-ui-plugin"],

    // fallback
    "/": ["content", "guide/", "about/intro", "program/", "interview/","software/", "basic/",],
  },

  en: {
  },
};
