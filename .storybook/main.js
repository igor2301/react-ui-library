const webpackReference = require("../webpack.config");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    const scssRule = webpackReference.module.rules.find(({ test }) =>
      test.test(".scss")
    );
    config.module.rules.unshift(scssRule);

    const svgRule = webpackReference.module.rules.find((rule) =>
      rule.test.test(".svg")
    );

    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push(svgRule);

    config.resolve.fallback = {
      crypto: false,
      path: false,
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      ...webpackReference.resolve.alias,
    };

    return config;
  },
};
