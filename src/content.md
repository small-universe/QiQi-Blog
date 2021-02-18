---
title: 目录导航
category: 目录
sticky: 1000
tags:
  - 目录总览
---
> ![img](https://img.shields.io/badge/七七博客-目录导航-blue.svg) 

<!-- more -->



## 项目结构

```
.
├──.github
|   └── workflows
|       └── deploy-github.yml(github action 用于持续部署)
|
├── src
│   ├── .vuepress 
│   │   ├── config 
|   |   |   ├── sideBar (侧边栏)
|   |   |   |   ├── backend
|   |   |   |   ├── frontend
|   |   |   |   ├── interview
|   |   |   |   ├── software
|   |   |   |   └── index.js
|   |   |   |
|   |   |   ├── navBar.js (导航栏)
|   |   |   └── private.js (私人设置，可在.gitignore中设置不加入版本管理)
│   │   |
│   │   ├── public (引用图片资源目录约定使用"/"为public目录)
|   |   |   └── assets
|   |   |       ├── icon
|   |   |       └── img
|   |   |
│   │   ├── styles (自定义主题的一些样式)
│   │   │   ├── base.styl
│   │   │   ├── index.styl
│   │   │   └── palette.styl
|   |   |
│   │   └── config.js (项目的配置)
│   │ 
│   ├── about
|   |   ├── intro.md
|   |   └── site.md
|   |  
│   ├── guide
|   |   ├── markdown.md
│   │   └── template.md
|   |
│   ├── interview
|   |   ├── Java208
│   │   └── readme.md
|   |
│   ├── program
|   |   ├── backend
│   │   └── readme.md
|   |
│   ├── blog.md (博客首页)
│   ├── content.md (目录导航)
│   └── readme.md (部落主页)
|   
├── .gitignore
├── deploy.sh (手动部署脚本)
├── package.json
└── package-lock.json
```

## 快速导航

侧边栏显示即为一级目录，点击查看相关内容