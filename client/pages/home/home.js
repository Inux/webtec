var m = require("mithril");

var featureOverview = require("../../modules/featureoverview/featureoverview.js")
var home = document.getElementById("home");
m.render(home, m(featureOverview));
