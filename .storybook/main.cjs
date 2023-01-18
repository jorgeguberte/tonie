module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|ts)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: { importLoaders: 1 },
        postcssLoaderOptions: { implementation: require("postcss") },
      },
    },
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
};
