var m = require("mithril");
var detector = require("../../libs/detector/detector.js");

var FeatureOverview = {
    oninit: function(vnode) {
        this.data = detector.getChecks();
    },
    view: function(vnode) {
        return m("table", this.data.map(function(check) {
           return m("tr",
           [ 
                m("td", check.name),
                m("td", check.func ? " true" : " false") 
           ]);
        }))
    }
}

module.exports = FeatureOverview;