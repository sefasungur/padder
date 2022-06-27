const buildEntry = require("./package.json").buildEntry;
const App = require(buildEntry).default;
module.exports = App;