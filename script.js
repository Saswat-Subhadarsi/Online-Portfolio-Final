const texts =[
    "STUDENT",
    "MACHINE LEARNING ENGINEER",
    "AI DEVELOPER",
    "AI ENTHUSIAST",
    "WEB DEVELOPER",
]

let speed = 200;
const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let chracterIndex = 0;

function typeWriter(){
    if(chracterIndex<texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(chracterIndex)
        chracterIndex++;
        setTimeout(typeWriter, speed)
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length>0){
       textElements.innerHTML =textElements.innerHTML.slice(0,-1)
       setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex+1)%texts.length;
        chracterIndex=0;
        setTimeout(typeWriter,500)
    }
}


window.onload=typeWriter



