startButtonProvider().onclick = validateUserGuess
playAgainLink().onclick = playAgain

var response = document.getElementsByTagName("h3")[0]

var container = document.getElementById("container");

var responseBox = document.querySelector(".response") 

let guessButtonToggle = document.getElementsByClassName("display_container")[0].childNodes[1]

let createContainerCounter = 0

function createContainer(){
    var inputBox = document.createElement("input");

inputBox.type = "number";
inputBox.value = ""
inputBox.id = "input_container"
inputBox.placeholder = "Enter a number";

container.appendChild(inputBox)

createContainerCounter++;

}

function generateRandomNumber(){
    var randomNumber = Math.floor(Math.random() * 10) + 1
  
    return randomNumber
}
var guessNUmber 
let userGuess
let guessCounter = 0

function startVerifier(){
    
    if (guessCounter >= 1){
        playAgainLink().disabled = false
    }
    if(guessCounter == 0){
        guessNUmber = generateRandomNumber()
        guessCounter++;
    }
    else if (guessCounter == 5){
        enableDisableGuessButton(true)
    }
    else{
        guessCounter++;
        
    }
}
function enableDisableGuessButton( bool){
    
    guessButtonToggle.disabled = bool
}

function validateUserGuess(){
    if(startButtonProvider().textContent === "Start"){
        startButtonProvider().textContent = "Guess"
        if(createContainerCounter === 0) 
        createContainer()
        return        
    }
    
     userGuess = guessButton()
     startVerifier()

    if(guessNUmber === parseInt( userGuess)){
        
        response.textContent = "You are correct!!!"
        enableDisableGuessButton(true)
        playAgainLink().disabled = false

        responseBox.style.backgroundColor = "greenYellow";
        responseBox.style.cssText = 'border: 4px solid green; background-color: yellowGreen; min-width: 49%; min-height: 7rem;padding-left: 50px; margin-bottom: 15px; font-size: 22px;'
    }
    else if (guessNUmber > userGuess){
        response.innerHTML = "Your guess is too low!!!"
        responseBox.style.cssText = 'border: 4px solid blue; min-width: 49%; min-height: 7rem;padding-left: 50px; margin-bottom: 15px; font-size: 22px;'
    }
    else if (guessNUmber < userGuess){
        response.innerHTML = "Your guess is too High!!!"
        responseBox.style.cssText = 'border: 4px solid purple; min-width: 49%; min-height: 7rem;padding-left: 50px; margin-bottom: 15px; font-size: 22px;'
    }
}

function UserInput(){
     return container.childNodes[3]
}

function guessButton(){
    let value = UserInput().value
    UserInput().value = ""
    
    return value
}
function playAgainLink(){
    return document.getElementById("play_again")
}
function playAgain(){
    guessCounter = 0  
    enableDisableGuessButton(false)

    console.log(guessCounter);

    responseBox.style.cssText = 'border: 0; min-width: 0%; min-height: 0rem;'
    
    startButtonProvider().textContent = "Start"

    response.innerHTML = ""
    createContainerCounter = 0
    
  container.removeChild(UserInput()) 

}

function startButtonProvider(){
    let result =  document.querySelector("#guess")
    return result
}

