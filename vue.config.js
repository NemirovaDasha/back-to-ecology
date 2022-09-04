const path = require('path');

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
// const types = ['vue'];
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/back-to-ecology/' : '/',
  outputDir: 'build',
  filenameHashing: true,
  productionSourceMap: false
};

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/vars.scss'),
        path.resolve(__dirname, './src/styles/mixins.scss'),
      ]
    });
}