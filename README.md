# vue2template

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 基本配置
1. 引入了normalize.css进行了样式初始化
2. 对axios进行了基本的封装，不过生产及开发环境下的接口URL、错误处理逻辑，需要自行配置
3. 在vue.config.js里配置了常用的文件夹别名，打包文件时的gzip压缩，取消了sourceMap的生成
4. 可以使用addcpn添加组件，在项目根目录下使用：“li addcpn
组件名”，组件将会默认添加到src/components文件夹中
5. 可以使用addview添加页面，路由会动态创建并加载，在项目根目录下使用：“li
addview 页面名”，页面将会默认添加到src/views文件夹中
6. 可以使用addstore添加vuex模块，模块同样会自动加载，在项目根目录下使用：“li
addstore 模块名”，模块将会默认添加到src/store/modules文件夹中
