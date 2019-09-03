/* craco.config.js */
const path = require("path")

const loaderNameMatches = function (rule, loaderName) {
  return rule && rule.loader && typeof rule.loader === 'string' &&
    (rule.loader.indexOf(`${path.sep}${loaderName}${path.sep}`) !== -1 ||
      rule.loader.indexOf(`@${loaderName}${path.sep}`) !== -1);
};

const getLoader = function (rules, matcher) {
  let loader;

  // Array.prototype.some is used to return early if a matcher is found
  rules.some(rule => {
    return (loader = matcher(rule) ?
      rule :
      getLoader(rule.use || rule.oneOf || (Array.isArray(rule.loader) && rule.loader) || [], matcher));
  });

  return loader;
};

const devtool = process.env.NODE_ENV === 'production' ? 'nosources-source-map' : 'cheap-module-eval-source-map';

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "src": path.resolve(__dirname, "src/")
    },
    externals: {
      echarts: 'echarts'
    },
    configure: {
      devtool: devtool,
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 100000,
            minChunks: 1,
            // cacheGroups: {
            //     vendor: {
            //         test: /[\\/]node_modules[\\/]/,
            //         name(module, chunks, chcheGroupKey) {
            //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            //             return `vendor.${packageName.replace('@', '')}`
            //         },
            //         reuseExistingChunk: true
            //     },
            // }
        }
      },
      devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-module-eval-source-map' // cheap-module-source-map
    }
  },
  babel: {
    plugins: [
      [
        'import',
        {
          'libraryName': 'antd',
          'libraryDirectory': 'es',
          'style': true
        },
        'ant'
      ],
    ],
  },
  plugins: [{
    plugin: {
      overrideWebpackConfig: ({
        webpackConfig
      }) => {
        const lessExtension = /\.less$/;

        const fileLoader = getLoader(
          webpackConfig.module.rules,
          rule => loaderNameMatches(rule, 'file-loader')
        );
        fileLoader.exclude.push(lessExtension);

        const lessRules = {
          oneOf: [{
            test: lessExtension,
            use: [{
              loader: require.resolve('style-loader')
            }, {
              loader: require.resolve('css-loader')
            }, {
              loader: require.resolve('less-loader'),
              options: {
                modifyVars: {
                  '@icon-url': `"${path.relative('./node_modules/antd/es/style/core', './src/assets/fonts/iconfont')}"`, // relative to ant design iconfont path 「node_modules/antd/es/style/core」
                  '@primary-color': '#00acc1',
                  '@link-color': '#008489',
                },
                javascriptEnabled: true
              }
            }]
          }]
        }

        const oneOfRule = webpackConfig.module.rules.find(rule => (
          typeof rule.oneOf !== 'undefined'
        ));
        const appendTo = oneOfRule ? oneOfRule.oneOf : webpackConfig.module.rules;
        appendTo.push(lessRules);

        return webpackConfig;
      }
    }
  }]
};
