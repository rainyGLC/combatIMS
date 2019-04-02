module.exports = {
  // 指向开发环境 API 服务器
  devServer: {
    proxy:'http://localhost:3000'
  },
  indexPath: process.env.NODE_ENV === 'production'
    ? '../../views/admin.tpl'
    : 'admin.tpl',
  outputDir: '../public/admin',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/',
}
