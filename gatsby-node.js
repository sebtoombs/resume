const path = require("path")

/**
 * Enable absolute imports with `/src` as root.
 *
 * See: https://github.com/alampros/gatsby-plugin-resolve-src/issues/4
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@style": path.resolve(__dirname, "./src/util/style"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@util": path.resolve(__dirname, "./src/util"),
        //"@test": path.resolve(__dirname, "./src/util/test"),
      },
    },
  })
}
