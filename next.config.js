const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    target: 'serverless',
    webpack(config) {
        config.module.rules.push({
            test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    publicPath: '/_next/static/',
                    outputPath: 'static/',
                    name: '[name].[ext]'
                }
            }
        })
        config.module.rules.push({
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                loader: 'image-webpack-loader',
                options: {
                    bypassOnDebug: true, // webpack@1.x
                    disable: true, // webpack@2.x and newer
                },
            }]
        })
        // config.module.rules.push({
        //     test: /\.json$/,
        //     use: {
        //         loader: 'json-loader',
        //     }
        // })
        config.node = {
            fs: 'empty',
            net: 'empty',
            tls: 'empty'
        }
        return config
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    trailingSlash: true,

})

// module.exports = {
//     async rewrites() {
//       return [
//         {
//           source: '/:path*',
//           destination: '/',
//         },
//       ];
//     },
//   };
