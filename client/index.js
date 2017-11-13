console.time("loading");

//Mithril
var m = require("mithril");
var foverview = require("./modules/featureoverview/featureoverview.js")
var fo = document.getElementById("featureoverview");
m.render(fo, m(foverview));

console.timeEnd("loading");