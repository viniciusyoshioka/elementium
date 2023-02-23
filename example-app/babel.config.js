const path = require("path")
const fs = require("fs")

const packages = path.resolve(__dirname, "..", "packages")

// List all packages under `packages/`
const workspaces = fs
    .readdirSync(packages)
    .map((p) => path.join(packages, p))
    .filter((p) => fs.statSync(p).isDirectory()
        && fs.existsSync(path.join(p, "package.json"))
    )

// Get the aliases for packages `source` field in their `package.json`
const aliases = {
    "@hooks": "./src/hooks",
    "@router": "./src/router",
    "@screens": "./src/screens",
}
workspaces.forEach((it) => {
    const pak = JSON.parse(
        fs.readFileSync(path.join(it, "package.json"), "utf8")
    )
    if (pak.source) {
        aliases[pak.name] = path.join(it, pak.source)
    }
})

module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                extensions: [".tsx", ".ts", ".js", ".json"],
                alias: aliases,
            },
        ],
        "react-native-reanimated/plugin",
    ],
}
