console.log("infaSelector Packaging Service")
console.log("1.3 Packaging")
console.log(" ")
console.log("LOADING CORE PACKAGES")
const packager = require('electron-packager')

console.log("PACKAGING")
async function bundleElectronApp(options) {
    const appPaths = await packager(options)
    console.log("PACKAGING COMPLETE")
}
const args = process.argv.slice(2)

const ver = args[args.indexOf('--version') + 1]



var opts = {
    "appVersion": parseInt(ver),
    "overwrite": true,
    "prune":true,
    "asar":true,
    "platform":"win32",
    "arch":"ia32",
    "productName":
}