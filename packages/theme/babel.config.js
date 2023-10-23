module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "modules": false
            }
        ],
        "@babel/preset-typescript"
    ],
    plugins: [
        "@babel/plugin-proposal-export-namespace-from",
    ],
}
