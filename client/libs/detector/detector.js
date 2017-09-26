var modernizr = require("modernizr");

var moderninzerCheck = function(func) {
    return func();
}

//All the different checks
var modernizerChecks = [
        {
            name: "adownload",
            func: modernizr.adownload
        },
        {
            name: "ambientlight",
            func: modernizr.ambientlight
        }, 
        {
            name: "applicationcache",
            func: modernizr.applicationcache
        }, 
        {
            name: "audio",
            func: modernizr.audio
        }, 
        {
            name: "battery",
            func: modernizr.battery
        }, 
        {
            name: "lowbattery",
            func: modernizr.lowbattery
        }, 
        {
            name: "emoji",
            func: modernizr.emoji
        }, 
        {
            name: "filesystem",
            func: modernizr.filesystem
        }, 
        {
            name: "flash",
            func: modernizr.flash
        }, 
        {
            name: "fullscreen",
            func: modernizr.fullscreen
        }, 
        {
            name: "gamepad",
            func: modernizr.gamepad
        }, 
        {
            name: "geolocation",
            func: modernizr.geolocation
        }, 
        {
            name: "hashchange",
            func: modernizr.hashchange
        }, 
        {
            name: "hiddenscroll",
            func: modernizr.hiddenscroll
        }, 
        {
            name: "history",
            func: modernizr.history
        }, 
        {
            name: "indexeddb",
            func: modernizr.indexeddb
        }, 
        {
            name: "notification",
            func: modernizr.notification
        }, 
        {
            name: "pagevisibility",
            func: modernizr.pagevisibility
        }, 
        {
            name: "performance",
            func: modernizr.performance
        }, 
        {
            name: "pointerlock",
            func: modernizr.pointerlock
        }, 
        {
            name: "proximity",
            func: modernizr.proximity
        }, 
        {
            name: "quotamanagement",
            func: modernizr.quotamanagement
        }, 
        {
            name: "speechrecognition",
            func: modernizr.speechrecognition
        }, 
        {
            name: "speechsynthesis",
            func: modernizr.speechsynthesis
        }, 
        {
            name: "localstorage",
            func: modernizr.localstorage
        }, 
        {
            name: "sessionstorage",
            func: modernizr.sessionstorage
        }, 
        {
            name: "websqldatabase",
            func: modernizr.websqldatabase
        }, 
        {
            name: "touchevents",
            func: modernizr.touchevents
        }, 
        {
            name: "userdata",
            func: modernizr.userdata
        }, 
        {
            name: "vibration",
            func: modernizr.vibration
        }
    ];

    
var Detector = {
    logChecks: function() {
        for (index = 0; index < modernizerChecks.length; ++index) {
            console.log(modernizerChecks[index].name);
            console.log(modernizerChecks[index].func ? "true" : "false");
        }
    },
    getChecks: function() {
        return modernizerChecks;
    }
}

module.exports = Detector;