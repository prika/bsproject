module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 10240 }))
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  pwa: {
    workboxOptions: {
      navigateFallback: 'index.html'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bstone/'
    : '/'
}
