let nameUser;
let pronounsUser;
let color;


let resp = 1;

let pMean = 0;
let timesEnding = 0;

/* ------------------------ Para Escolhas ----------------------- */
function obterResposta() {
    let compRes;
    compRes = document.getElementById('resUser').innerHTML;
    console.log("Resp:" + compRes);
}


let OnLeftPressed = function (res, mean, second) {

    let divResp = "resUser" + resp;

    pMean = pMean + mean;

    //Ativa o PNG balão de fala
    let bubbleID = "buttonChoice" + resp + "_bubble";

    var bubble = document.getElementById(bubbleID);
    bubble.style.display = "block";
    console.log("resp" + resp);

    resp++;
    document.getElementById(divResp).innerHTML =  res;

    //second: diz-nos porque tipo de opção secundaria foi chamada (1 - ativa o continuation 1; 2 - ativa o continuation2)
    if(second == 1){
        var continuation = document.getElementById("buttonChoice1_continuation");
        if (continuation.style.display === "none") {
            continuation.style.display = "block";
        }
    }else if(second == 2){
        var continuation = document.getElementById("buttonChoice2_continuation");
        if (continuation.style.display === "none") {
            continuation.style.display = "block";
        }
    }

    if(resp < 3){

        var continuation = document.getElementById("buttonsChoice1");
        if (continuation.style.display === "block") {
            continuation.style.display = "none";
        }
    
        var continuation = document.getElementById("buttonsChoice2");
        if (continuation.style.display === "none") {
            continuation.style.display = "block";
        }

    }

    /*var continuation = document.getElementById("buttonsChoice1.1");
    if (continuation.style.display === "block") {
        continuation.style.display = "none";
    }

    var continuation = document.getElementById("buttonsChoice2");
    if (continuation.style.display === "none") {
        continuation.style.display = "block";
    }*/

    document.getElementById("choices1").style.display = "block";
    document.getElementById("choices2").style.display = "block";
    if(resp>=3){
        document.getElementById("choices3").style.display = "block";
        document.getElementById("choices4").style.display = "block";
    }

};

let OnRightPressed = function (res, mean, second) {
    let divResp = "resUser" + resp;

    pMean = pMean + mean;


    //Ativa o PNG balão de fala
    let bubbleID = "buttonChoice" + resp + "_bubble";

    var bubble = document.getElementById(bubbleID);
    bubble.style.display = "block";


    resp++;
    document.getElementById(divResp).innerHTML = res;

    //second: diz-nos porque tipo de opção secundaria foi chamada (1 - ativa o continuation 1; 2 - ativa o continuation2)
    if(second == 1){
        var continuation = document.getElementById("buttonChoice1_continuation");
        if (continuation.style.display === "none") {
            continuation.style.display = "block";
        }
    }else if(second == 2){
        var continuation = document.getElementById("buttonChoice2_continuation");
        if (continuation.style.display === "none") {
            continuation.style.display = "block";
        }
    }
    
    if(resp < 3){

        var continuation = document.getElementById("buttonsChoice1");
        if (continuation.style.display === "block") {
            continuation.style.display = "none";
        }
    
        var continuation = document.getElementById("buttonsChoice2");
        if (continuation.style.display === "none") {
            continuation.style.display = "block";
        }

    }

    document.getElementById("choices1").style.display = "block";
    document.getElementById("choices2").style.display = "block";
    if(resp>=3){
        document.getElementById("choices3").style.display = "block";
        document.getElementById("choices4").style.display = "block";
    }

};


function OnChangeScene(changeTo){

    let stringScene = changeTo+"?pMean="+pMean;
    console.log(stringScene);
    location.replace(stringScene);
    sessionStorage.setItem("pMean", pMean);
    pMean=0;
}




function userData() {
    nameUser = document.getElementById("nome").value;
    pronounsUser = document.getElementById("pronomes").value;

    document.write("Hi, " + nameUser + "!");

    //FAZER TRATAMENTO DE PRONOMES AQUI? No -  cuz vai variar de he/him. a menos que crie duas variaveis para isso. p1; p2

    if (nameUser != '') {
        //NAO APAGAR window.location.replace('story/base.html?cena=scenes/scene1.html');
        window.location.replace('story/base.html');
        //location.replace("story/base.html");
    } else {
        location.replace("index.html");
    }

}

