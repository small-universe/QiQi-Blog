/**
 * 扩展 VuePress 应用
 */
import Vue from "vue"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/**
 * 引入newDream的样式后博客首页中的信息栏图标错误，暂时无法解决，改用更好用的layx插件，
 * 因为vuepress是服务端渲染，Node.js中没有window对象，要解决浏览器的API访问限制的问题
 * 参考 https://juejin.cn/post/6894571293337878536
 */

// import "new-dream/css/main.css";
// import newDream from "new-dream";

// 使用异步函数也是可以的
export default ({
                    Vue, // VuePress 正在使用的 Vue 构造函数
                    // options, // 附加到根实例的一些选项
                    // router, // 当前应用的路由实例
                    // siteData, // 站点元数据
                    // isServer, // 当前应用配置是处于 服务端渲染 或 客户端
                }) => {
    // ...做一些其他的应用级别的优化
    // 全局注入组件
    Vue.use(ElementUI);
    // Vue.use(newDream);
};
