let greenB = $(".green")
let redB = $(".red")
let yellowB = $(".yellow")
let blueB = $(".blue")


greenB.click(function(){
    playSound("green")
})
redB.click(function(){
    playSound("red")
})
yellowB.click(function(){
    playSound("yellow")
})
blueB.click(function(){
    playSound("blue")
})

function playSound(color){
    let aud = new Audio("./sounds/"+color+".mp3")
    aud.play()
}

let gameOver = false;

while (gameOver){
    
}