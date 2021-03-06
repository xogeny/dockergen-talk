import fsbx = require("fuse-box");

// Create FuseBox Instance
let fuseBox = new fsbx.FuseBox({
    homeDir: "src/",
    sourceMap: {
        bundleReference: "sourcemaps.js.map",
        outFile: "../docs/sourcemaps.js.map",
    },
    outFile: "./docs/out.js",
    plugins: [
        fsbx.SVGPlugin(),
        fsbx.CSSPlugin()
    ]
});

fuseBox.devServer(">entry.tsx");