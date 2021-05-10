const path = require("path");

const GLOBAL_CSS_REGEXP = /index.scss/;

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(sa|sc|c)ss$/,
      use: [
        { loader: "style-loader" },
        {
          loader: "css-loader",
          options: {
            modules: {
              mode: "local",
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
        },
        { loader: "postcss-loader" },
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
          },
        },
      ],
      exclude: GLOBAL_CSS_REGEXP,
      include: path.resolve(__dirname, "../"),
    });
    config.module.rules.push({
      test: GLOBAL_CSS_REGEXP,
      use: ["style-loader", "css-loader"],
    });
    config.resolve.fallback = {
      crypto: false,
      path: false,
    };
    return config;
  },
};
