module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        "@storybook/addon-storysource/loader"
    ],
    "webpackFinal": (config) => ({
        ...config,
        module: {
            rules: config.module.rules.filter(rule => {
                if (!rule.use)
                    return true
                return !rule.use.find(
                    useItem => typeof useItem.loader === 'string' && useItem.loader.includes('eslint-loader')
                )
            }),
        },
    }),
}