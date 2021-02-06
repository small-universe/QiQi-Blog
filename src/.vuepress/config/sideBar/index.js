module.exports = {
  zh: {

    "/program/language/java/": require("./language/java"),
    "/program/language/python/": require("./language/python"),
    "/program/language/node.js/": require("./language/node"),
    "/program/language/typescript/": require("./language/typescript"),
    "/program/language/js/": require("./language/javascript"),
    "/program/language/dart/": require("./language/dart"),
    "/program/language/jquery/": require("./language/jquery"),
    "/program/language/html/": require("./language/html"),
    "/program/language/css/": require("./language/css"),
    "/program/language/emmet/": require("./language/emmet"),


    "/program/webframe/vue/": require("./webframe/vue"),

    "/program/Android/": ["", "intro", "base", "resource"],
    "/program/backend/": [""],
    "/program/language/": require("./language"),
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


    "/about/": ["intro", "site"],
    "basic/":[""],
    "/program/": [
      "",
      "language/",
      "backend/",
      "frontend/",
      // "Android/",
      // "mini-app/",
    ],
    "/software/": require("./software"),
    "/interview/":[""],
    "/guide/":["markdown","template"],

    // fallback
    "/": ["","about/intro", "program/", "software/", "basic/","interview/"],
  },

  en: {
  },
};
