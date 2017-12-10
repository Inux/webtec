const jq = require("jquery");
var qk = require('js-cookie');
var content = "#styleSwitcher";

const styleOrder = [
    "--color-main",
    "--color-background",
    "--color-borders"
];

const styleConfig = {
    dark: [
        "#cdcdcd",
        "#232323",
        "#ccc"
    ],
    light: [
        "#232323",
        "#cdcdcd",
        "#333"
    ]
}

var setStyle = function(style) {
    for(var i = 0; i < style.length; i++) {
        jq("body").get(0).style.setProperty(
            styleOrder[i],
            style[i]
        );
    }
}

//Check if cookie is available 
//if available change to saved style
//if NOT take default
const style = qk.get('style');
console.log("cookie style value: " + style); 
if(style != '' && style != null) {
    if(style == "dark") {
        setStyle(styleConfig.dark);
        jq("#darkRadioBtn").prop("checked", true);
    } else {
        setStyle(styleConfig.light);
        jq("#lightRadioBtn").prop("checked", true);
    }
} else {
    setStyle(styleConfig.dark);
    jq("#darkRadioBtn").prop("checked", true);
}

jq("#darkRadioBtn").click(
    function() {
        jq("#darkRadioBtn").prop("checked", true);
        qk.set('style', 'dark');
        setStyle(styleConfig.dark);
        console.log("pressed dark radio button");
    }
)

jq("#lightRadioBtn").click(
    function() {
        jq("#lightRadioBtn").prop("checked", true);
        qk.set('style', 'light');
        setStyle(styleConfig.light);
        console.log("pressed light radio button");
    }
)

