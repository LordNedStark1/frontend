const number = document.getElementsByClassName("container")

const valueToChange = number[0].childNodes[1]


// valueToChange.addEventListener(click)
 
var counter = 1
function increment(){
    var value = valueToChange.textContent 
    
     valueToChange.textContent = parseInt(value) + counter

}
function decrement(){

    valueToChange.textContent  = parseInt(valueToChange.textContent) - counter

}
function valueIncrement(){
    const inputValue = document.getElementById("input").value;
   
    document.getElementById("input").value = "";

    valueToChange.textContent  = parseInt(inputValue) + parseInt(valueToChange.textContent)

}
function valueDecrement(){
    const inputValue = document.getElementById("input").value;
   
    document.getElementById("input").value = "";

    valueToChange.textContent  =  parseInt(valueToChange.textContent) - parseInt(inputValue) 

}
    document.getElementById("increment").onclick = increment
    document.getElementById("decrement").onclick = decrement
    document.getElementById("valueIncrement").onclick = valueIncrement
    document.getElementById("valueDecrement").onclick = valueDecrement
