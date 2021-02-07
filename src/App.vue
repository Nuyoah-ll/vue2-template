<template>
  <div id="app">
    <h1>欢迎使用li的个人脚手架</h1>

    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <keep-alive>
      <router-view />
    </keep-alive>

    <h1>对vue-cli4脚手架搭建的vue项目进行了如下的修改：</h1>
    <ul>
      <li>封装了axios，不过生产及开发环境下的接口地址，还有错误处理逻辑，需要您自行配置</li>
      <li>在vue.config.js里配置了常用文件夹别名，图片压缩，打包文件gzip压缩，取消了sourceMap</li>
      <li>可以使用addcpn添加组件</li>
      <li>可以使用addview添加页面，路由会动态创建并加载</li>
      <li>可以使用addstore添加vuex模块，模块同样会自动加载</li>
    </ul>
  </div>
</template>

<style scoped lang="less">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
