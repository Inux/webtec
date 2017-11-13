console.time("loading");

//Styles
//var style = require("./styles/layout.css");
//var style = require("./styles/content.css");
//var style = require("./styles/nav.css");
//var style = require("./styles/footer.css");
//var style = require("./styles/device_label.css");

//Mithril
var m = require("mithril");
var foverview = require("./modules/featureoverview/featureoverview.js")
var fo = document.getElementById("featureoverview");
m.render(fo, m(foverview));

console.timeEnd("loading");