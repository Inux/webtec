const jq = require("jquery");
var qk = require('js-cookie');
var content = "#content";

const pagesConfig = [
    {
        menu: '#navHome', 
        page: 'home.html'
    },
    {
        menu: '#navCanvas', 
        page: 'canvas.html'
    },
    {
        menu: '#navFormular', 
        page: 'formular.html'
    },
    {
        menu: '#navStyleSwitcher', 
        page: 'styleswitcher.html'
    }
];

//Check if cookie is available 
//if available change to saved page
//if NOT navigate to home.html
const pageck = qk.get('page');
if(pageck != '' && pageck != null) {
    jq(content).load(pageck);
} else {
    jq(content).load('home.html');
}

//Add click listeners to menu (based on pagesConfig)
for (var i = 0; i < pagesConfig.length; i++) {
    let page = pagesConfig[i];
    jq(page.menu).click(
        function() {
            qk.set('page', page.page, { expires: 7 });
            jq(content).load(page.page);
        }
    );
}

