const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  configureWebpack: {
    // 配置别名
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'service': '@/service',
        'views': '@/views',
        'store': "@/store",
        'utils': "@/utils"
      }
    },

    // 配置gzip压缩，减小打包体积，若想部署之后，浏览器请求gzip文件，需要静态资源服务器配置gzip压缩
    plugins: [
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: /(\.js|\.html|\.css)$/,
        filename: "[path][base].gz",
        minRatio: 0.8,
        threshold: 10240,
        deleteOriginalAssets: false,
      })
    ]
  },

  // 打包不生成map文件
  productionSourceMap: false,
}