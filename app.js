var BTNtranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#input-txt");
var txtoutput = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = txtinput.value;

    
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtoutput.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

BTNtranslate.addEventListener("click", clickHandler)