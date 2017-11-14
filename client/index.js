const jq = require("jquery");
jq("#content").load("home.html");

jq("#navHome").click(function() {
    jq("#content").load("home.html");
});

jq("#navCanvas").click(function() {
    jq("#content").load("canvas.html");
});

jq("#navFormular").click(function() {
    jq("#content").load("formular.html");
});