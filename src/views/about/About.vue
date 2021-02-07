<template>
  <div id="about">
    <h4>当前脚手架对vue-cli4脚手架搭建的项目添加了如下的基础配置：</h4>
    <div class="list">
      <p>1.引入了normalize.css进行了样式初始化</p>
      <p>
        2.对axios进行了基本的封装，不过生产及开发环境下的接口URL、错误处理逻辑，需要自行配置
      </p>
      <p>
        3.在vue.config.js里配置了常用的文件夹别名，打包文件时的gzip压缩，取消了sourceMap的生成
      </p>
      <p>
        4.可以使用addcpn添加组件，在项目根目录下使用：“li addcpn
        组件名”，组件将会默认添加到src/components文件夹中
      </p>
      <p>
        5.可以使用addview添加页面，路由会动态创建并加载，在项目根目录下使用：“li
        addview 页面名”，页面将会默认添加到src/views文件夹中
      </p>
      <p>
        6.可以使用addstore添加vuex模块，模块同样会自动加载，在项目根目录下使用：“li
        addstore 模块名”，模块将会默认添加到src/store/modules文件夹中
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#about {
  h4 {
    text-align: center;
  }
  .list {
    width: 700px;
    padding: 20px;
    border: 1px solid black;
  }
}
</style>