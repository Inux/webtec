const jq = require("jquery");
var qk = require('js-cookie');
var content = "#content";

var error = jq("#formularError");
var errorText = jq("#formularErrorText");

var vname = jq("#vname");
var nname = jq("#nname");
var email = jq("#email");
var nachricht = jq("#nachricht");

var extendError = function(text) {
    if(errorText.text() == "") {
        errorText.text(text);
    } else {
        errorText.text(errorText.text()+", "+text);
    }
}

var validateEmail = function(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( email );
}

jq("#formular").submit(
    function(e) {
        e.preventDefault();
        var hasError = false;
        errorText.text("");
        error.get(0).style.setProperty("display", "none");

        //Vorname
        if(vname.val() === "") {
            extendError("Vorname ist leer");
            hasError = true;
        }

        //Nachname
        if(nname.val() === "") {
            extendError("Nachname ist leer");
            hasError = true;
        }

        //Email
        if(email.val() === "") {
            extendError("Email ist leer");
            hasError = true;
        } else {
            if(!validateEmail(email.val())) {
                extendError("Email ist ungültig");
                hasError = true;
            }
        }

        //Nachricht
        if(nachricht.val() === "") {
            extendError("Nachricht ist leer");
            hasError = true;
        } 

        if(hasError) {
            error.get(0).style.setProperty("display", "initial"); 
        } else {
            if (confirm("Drücken sie ok um das Formular abzusenden!") == true) {
                txt = "Formular wird gesendet!";
                qk.set('page', 'home.html');
                jq(content).load('home.html');
            } else {
                txt = "Abgebrochen!";
            }
        }
    }
);
