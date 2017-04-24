module.exports = {

  context: __dirname + "",
  entry: {
    javascript: "./demo/main.js"
  },

  output: {
    filename: "ui.js",
    path: __dirname + "/dist",
  },

  resolve: {
    modules: ['node_modules', 'src', 'demo']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "react-hot-loader",
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: [ "parcelify-loader" ],
        include: [
          __dirname + "/src",
          __dirname + "/demo"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
          {
            presets:['es2015', 'react'],
            plugins:['transform-class-properties']
          }
      },
      // {
      //   test: /\.html$/,
      //   loader: "file?name=[name].[ext]",
      // },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader",
        },{
          loader: "css-loader",
        },{
          loader: "sass-loader",
          options: {
            includePaths: [__dirname + "/src/style-config"]
          }
        }],
      }
    ]
  },
}
