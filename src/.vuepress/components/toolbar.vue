<template>

  <div class="container">
    <!-- github corner -->
    <div class="corner">
      <a href="https://github.com/small-universe/qiqi-tribe" class="github-corner" aria-label="View source on GitHub" target="_blank">
        <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#64CEAA; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
          <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
        </svg>
      </a>
    </div>

    <div class="button">
      <div style="margin-bottom: 10px">
        <el-popover
            placement="left"
            title=""
            width="80"
            trigger="hover">
          <!--        <a href=\'https://www.npmjs.com/package/new-dream\'>new-dream</a>-->
          <div style="text-align: left;">
            <el-row style="margin-bottom: 5px">
              <el-button size="small" @click="onlineBack">在线工具</el-button>
            </el-row>

            <el-row>
              <el-button size="small" @click="rookieBack">菜鸟工具</el-button>
            </el-row>
          </div>
          <el-button slot="reference" type="primary" plain>后端工具</el-button>
        </el-popover>
      </div>

      <div style="margin-bottom: 10px">
        <el-popover
            placement="left"
            title=""
            width="80"
            trigger="hover">
          <div style="text-align: left;">
            <el-row style="margin-bottom: 5px">
              <el-button size="small" @click="codesandboxWeb">CodeSandbox</el-button>
            </el-row>
            <el-row>
              <el-button size="small" @click="rookieWeb">菜鸟工具</el-button>
            </el-row>

          </div>
          <el-button slot="reference" type="primary" plain>前端工具</el-button>
        </el-popover>
      </div>

    </div>
  </div>
</template>
<!--<script>-->
<!--document.write('<link rel="stylesheet" href="../static/new-dream/css/dream.css">');-->
<!--</script>-->
<!--<script src="../static/vue-layx/layx.js" ></script>-->
<script >
export default {
  name:"toolbar",
  data(){
    return{
      appid:"",

    }
  },
  beforeMount(){
  },
  mounted() {
    // Node.js中没有window对象，这时候访问浏览器/DOM中的API自然会报错
    // 需要在合适的生命周期钩子中动态导入 "../static/vue-layx/layx"
    // 因此需要确保在beforeMount或者mounted访问浏览器/DOM的API。
    import("../static/vue-layx/layx").then(module => {
      this.toolbar = module.default
    })
    window.addEventListener("dblclick", this.dbclick);
  },
  methods:{
    onlineBack(){
      layx.iframe('coderunner','在线工具','https://tool.lu/coderunner/',{
        width:800,
        height:450
      });
    },
    rookieBack(){
      layx.iframe('runoob','菜鸟工具','https://c.runoob.com/compile/10',{
        width:600,
        height:450
      });
    },

    codesandboxWeb(){
      layx.iframe('loadtext','CodeSandBox','https://codesandbox.io/s/github/small-universe/qiqi-tribe/tree/dev?file=/src/.vuepress/config.js',
          {
            with:1300,
            height:450,
            loadingText: '<div>CodeSandBox在国内访问较慢，建议使用VPN，<a href="http://qiqi.dreamagain.top/software/tool/accelerator/" target="_blank">梯子推荐</a></div>'
          });
    },
    rookieWeb(){
      layx.iframe('runoob','菜鸟工具','https://c.runoob.com/front-end/61',
      {
        width:600,
        height:500
      });
    },
    dbclick(){

    },

  }
}
</script>
<style>
.github-corner:hover
.octo-arm{animation:octocat-wave 560ms ease-in-out}
@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}
@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner
                                                                       .octo-arm{animation:octocat-wave 560ms ease-in-out}}

</style>
<style scoped>
/** 在style中导入style的固定格式 */
/*@import "../static/new-dream/css/main.css";*/
@import "../static/vue-layx/layx.css";
.container{
  position: fixed;
  right: 0;
  top: 58.5px;
  width: 90px;
  padding: 12px 0px;
  /* border-left: 1px solid rgba(0,127,255 ,0.2); */
  text-align: center;
  background-color: #ffffff;
  /* height: 100%; */
  box-shadow: -1px 0 2px 0.5px rgba(0,127,255 ,0.2);
  /* 透明度：全透明 */
  /*opacity: 0.2;*/
  z-index: 1;
}
.container >div img{
  width: 140px;
}
.container >div h4{
  font-size: 15px;
  color: #007fff;
  margin: 2px;
}
.container >div p{
  font-size: 12px;
  margin: 10px 0;
}
.container >div p span{
  color: #007fff;
  font-weight: bold;
}
.corner{
  margin-bottom: 40px;
}
.button{
  margin-top: 70px;
  /* 透明度：全透明 */
}
@media screen and (max-width: 1360px) {
  .container{
    display: none;
  }
}
</style>

