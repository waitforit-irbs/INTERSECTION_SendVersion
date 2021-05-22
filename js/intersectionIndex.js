let nameUser;
let pronounsUser;

let p1
let p2;

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
    resp++;

    pMean = pMean + mean;

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

    document.getElementById("choices1").style.display = "block";
    document.getElementById("choices2").style.display = "block";
    if(resp>=3){
        document.getElementById("choices3").style.display = "block";
        document.getElementById("choices4").style.display = "block";
    }

};

let OnRightPressed = function (res, mean, second) {
    let divResp = "resUser" + resp;
    resp++;

    pMean = pMean + mean;

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

    document.getElementById("choices1").style.display = "block";
    document.getElementById("choices2").style.display = "block";
    if(resp>=3){
        document.getElementById("choices3").style.display = "block";
        document.getElementById("choices4").style.display = "block";
    }

};

function userData() {

    nameUser = document.getElementById("nome").value;
    pronounsUser = document.getElementById("pronomes").value;

    sessionStorage.setItem("nameUserChoice", nameUser);
    
    if(pronounsUser==1){
        p1 = "he";
        p2 = "him";
        p3 = "himself";
    } else if(pronounsUser == 2){
        p1 = "she";
        p2 = "her";
        p3 = "herself";
    } else if(pronounsUser == 3){
        p1 = "they";
        p2 = "them";
        p3 = "themselves";
    }

    sessionStorage.setItem("p1Choice", p1);
    sessionStorage.setItem("p2Choice", p2);
    sessionStorage.setItem("p3Choice", p3);

    document.write("Hi, " + nameUser + "!");

    if (nameUser != '') {
        let stringScene;
        stringScene = "story/base.html?p1="+p1+"&p2="+p2+"&nome="+nameUser;
        console.log(stringScene);
        window.location.replace(stringScene);
    } else {
        location.replace("index.html");
    }

}


function OnChangeScene(changeTo){

    let stringScene = changeTo+"?pMean="+pMean;
    console.log(stringScene);
    location.replace(stringScene);

}



