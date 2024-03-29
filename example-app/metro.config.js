const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config")
const path = require("path")
const fs = require("fs")
const escape = require("escape-string-regexp")
const exclusionList = require("metro-config/src/defaults/exclusionList")

const root = path.resolve(__dirname, "..")
const packages = path.resolve(root, "packages")

// List all packages under `packages/`
const workspaces = fs
    .readdirSync(packages)
    .map(p => path.join(packages, p))
    .filter(p => fs.statSync(p).isDirectory()
        && fs.existsSync(path.join(p, "package.json"))
    )

// Get the list of dependencies for all packages in the monorepo
const modules = []
    .concat(...workspaces.map(it => {
        const pak = JSON.parse(
            fs.readFileSync(path.join(it, "package.json"), "utf8")
        )

        // We need to make sure that only one version is loaded for peerDependencies
        // So we exclude them at the root, and alias them to the versions in example's node_modules
        return pak.peerDependencies ? Object.keys(pak.peerDependencies) : []
    }))
    .sort()
    .filter((m, i, self) =>
        // Remove duplicates and package names of the packages in the monorepo
        self.lastIndexOf(m) === i && !m.startsWith("@elementium/")
    )

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    projectRoot: __dirname,
    watchFolders: [root],

    // We need to make sure that only one version is loaded for peerDependencies
    // So we blacklist them at the root, and alias them to the versions in example's node_modules
    resolver: {
        blacklistRE: exclusionList([]
            .concat(...workspaces.map(it => modules.map(m =>
                new RegExp(`^${escape(path.join(it, "node_modules", m))}\\/.*$`)
            )))
        ),

        // When we import a package from the monorepo, metro won't be able to find their deps
        // We need to specify them in `extraNodeModules` to tell metro where to find them
        extraNodeModules: modules.reduce((acc, name) => {
            acc[name] = path.join(root, "node_modules", name)
            return acc
        }, {}),
    },

    server: {
        enhanceMiddleware: middleware => (req, res, next) => {
            // When an asset is imported outside the project root, it has wrong path on Android
            // So we fix the path to correct one
            if (/\/@react-navigation\/drawer\/.+\.png\?.+$/.test(req.url)) {
                req.url = `/assets/../${req.url}`
            }

            return middleware(req, res, next)
        }
    },
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
