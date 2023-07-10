// let increaseButton = document.querySelector("#increase")
let increaseButton = document.querySelector("#increase")
let decreaseButton = document.querySelector("#decrease")
let first = document.querySelector(".first")
let second = document.querySelector(".second")
let third = document.querySelector(".third")

let count = 0
const increaseButtonFunction= () =>{
    if (count < 3){
        count++
        }       
    switch(count){
        case 1:
            first.style.cssText = "background-color: green"
            break
        case 2:
            second.style.cssText = "background-color: green"
            break
        case 3:
            third.style.cssText = "background-color: green"
            break
        }
        
}
const decreaseButtonFunction = () =>{
    switch(count){
        case 1:
            first.style.cssText = "background-color: aqua"
            break
        case 2:
            second.style.cssText = "background-color: aqua"
            break
        case 3:
            third.style.cssText = "background-color: aqua"
            break
        }
        if (count > 0){
            count--
            }
}
increaseButton.onclick = increaseButtonFunction
decreaseButton.onclick = decreaseButtonFunction

