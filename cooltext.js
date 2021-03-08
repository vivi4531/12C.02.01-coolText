"use strict"; 

window.addEventListener("DOMContentLoaded", start); 
console.log("Der er hul igennem 👋🏻");



let splittext;

function start(){
    //Create a global variable and select the text from the html
let sentence = document.querySelector("#cooltext");

    console.log(sentence);
    
    //Split text into seperate letters/characters
    splittext = sentence.textContent.split(""); 
    console.log(splittext); 

    //Remove existing text 
    sentence.textContent = "";
    
    //For each character in the text, create a span element and put the character inside the span element 
    splittext.forEach((letter, index) => {
        const span = document.createElement("span");

        

        span.classList.add("fulltext-animation"); 
        span.style.setProperty("--letter", index);

        if (letter === " "){
            span.innerHTML = "&nbsp";
        }
        else {
            span.textContent = letter; 
        }

        sentence.append(span); 
    }); 

    //Make each letter/character animate different from the previous 

    //for (let i=0; i < sentence.length; i++){
    //const delay = 0.1 * i; 
    //document.querySelector("letter").style.setProperty("--delay", delay + "s");
     
}





