//taş kağıt makas oyunu

const computerChoiseDisplay = document.getElementById("computer-choise");
const userChoiseDisplay = document.getElementById("user-choise");
const resultdisplay = document.getElementById("result");
const possibleChoises = document.querySelectorAll("button");

let userChoise;
let computerChoise;
let result;
possibleChoises.forEach((possibleChoise) =>
  possibleChoise.addEventListener("click", (e) => {
    userChoise = e.target.id;
    userChoiseDisplay.innerHTML = userChoise;
    generateComputerChoise();
    getResult();
  })
);

function generateComputerChoise() {
  const renderNumber = Math.floor(Math.random() * possibleChoises.length+1);
  if (renderNumber === 1) {
    computerChoise = "tas";
  }

  if (renderNumber === 2) {
    computerChoise = "kagit";
  }
  if (renderNumber === 3) {
    computerChoise = "makas";
  }
computerChoiseDisplay.innerHTML=computerChoise
}


function getResult(){
    if(computerChoise===userChoise){
        result = "Berabere!"
    }


    if(computerChoise==="tas" && userChoise==="makas"){
        result = "MAalesef kaybettiniz"
    }

    if(computerChoise==="tas" && userChoise==="kagit"){
        result = "tebrikler kazandınız"
    }
    if(computerChoise==="kagit" && userChoise==="makas"){
        result = "MAalesef kaybettiniz"
    }
    if(computerChoise==="tas" && userChoise==="makas"){
        result = "MAalesef kaybettiniz"
    }
    if(computerChoise==="makas" && userChoise==="kagit"){
        result = "tebrikler kazandınız"
    }
    if(computerChoise==="makas" && userChoise==="tas"){
        result = "tebrikler kazandınız"
    }
    resultdisplay.innerHTML=result;
}