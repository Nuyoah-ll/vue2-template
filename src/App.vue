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
  </div>
</template>

<style lang="less">
@import url("assets/css/normalize.css");
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
