

var onlineList = []

let onlineListCounter = 1
class Online{

  static fetchOnline(){
   for(let i = 0; i< 30; i++){
    const response = fetch('https://api.kanye.rest/')
    .then(response => {
      return response.json()
      .then(({ quote }) => {
        onlineList.push(quote);
        });
    })
   }
   
  }

 static quoting (){
  
  const cls = document.getElementsByClassName("cls")
  const text = cls[0].childNodes[0]
  if (onlineListCounter === onlineList.length-3){
    Online.fetchOnline()
  }
  text.textContent = onlineList[onlineListCounter]
  onlineListCounter++
 
  }

}  
Online.fetchOnline()

let userQuoteList = []
let myListCounter = 0
 
class MyQuotes{

   static quoting(){
    const cls = document.getElementsByClassName("cls")
    const text = cls[0].childNodes[0]

    if(myListCounter < userQuoteList.length){
    text.textContent = userQuoteList[myListCounter];
    myListCounter++
    }
    else myListCounter = 0
    
  }
}

var quoteOption = 0

  function changeQuoteOption(){
    if (quoteOption === 0) quoteOption = 1
    else if (quoteOption === 1) quoteOption = 0
  }
  

  function nextButton(){
      switch(quoteOption){
        case 0: Online.quoting()
        break
        case 1: MyQuotes.quoting() 
    }
  }
  function onlinePrevious(){
    if(onlineListCounter >= 0 ){
      onlineListCounter--
      return onlineList[onlineListCounter]
    }
  }
    function previousButton(){
      let p = document.getElementById("quote");
      p.innerHTML = quoteList[(quoteList.length - 1) - 1];
   
  }

  function enter(){
  const inputValue = document.getElementById("input").value;
      
      userQuoteList.push(inputValue);
      document.getElementById("input").value = "";
      
  }

    document.getElementById("next").onclick = nextButton
    document.getElementById("previous").onclick = previousButton
    document.getElementById("choice").onclick = changeQuoteOption
    document.getElementById("enter").onclick = enter



