const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,    // 关闭语法检查
  // 开启代理服务器
  // 方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'       // 要发送的地方（不需要写全）
  // }

  // 方式二
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api': ''},
        ws: true,
        changeOrigin: true
      },
      '/car': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/car': ''},
        ws: true,
        changeOrigin: true
      },
    }
  }
})
