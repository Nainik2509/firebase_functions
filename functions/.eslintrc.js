module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: ["eslint:recommended", "google"],
    rules: {
        "eol-last": ["error", "never"],
        quotes: ["error", "single", "double"],
        indent: "off",
    },
};