// vue.config.js
module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/notes-app-vue/'
    : '/',
  // assetsDir: '',
  // filenameHashing: true,
  // productionSourceMap: false

  // publicPath: process.env.NODE_ENV === 'production' ?
  // '/textbook/':
  // '/'
  // используется для продакшена '/textbook/' имя репозитория
}
