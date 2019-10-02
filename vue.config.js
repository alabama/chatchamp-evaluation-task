module.exports = {
  // options...
  devServer: {
    host: process.env.HOST || 'localhost',
    disableHostCheck: true,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader');
  },
  css: {
    extract: false,
  },
};
