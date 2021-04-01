module.exports = {
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            fallback: require.resolve("file-loader"),
            esModule: false,
          },
          // loader: "file-loader",
          // options: {
          //   name: "[name].[hash].[ext]",
          //   outputPath: "imgs",
          //   esModule: false,
          // },
        },
      },
    ],
  },
};
