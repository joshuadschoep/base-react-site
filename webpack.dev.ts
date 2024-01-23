import { Configuration } from "webpack";
import { mergeWithRules } from "webpack-merge";
import common from "./webpack.common";

const config: Configuration = mergeWithRules({
  module: {
    rules: {
      test: "match",
      use: "prepend",
    },
  },
})(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
  },
  devtool: "inline-source-map",
  devServer: {
    port: "3000",
    static: "./public",
    open: false,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        use: ["style-loader"],
      },
    ],
  },
});

export default config;
