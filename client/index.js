console.time("loading");

var m = require("mithril");
var foverview = require("./modules/featureoverview/featureoverview.js")
var app = document.getElementById("app");
var fo = document.getElementById("featureoverview");
m.render(app, m("h1", "My first app"));
m.render(fo, m(foverview));
//m.render(app, m("div", foverview));

console.timeEnd("loading");