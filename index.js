// let greenB = $(".green")
// let redB = $(".red")
// let yellowB = $(".yellow")
// let blueB = $(".blue")

// greenB.click(function(){
//     playSound("green")
// })
// redB.click(function(){
//     playSound("red")
// })
// yellowB.click(function(){
//     playSound("yellow")
// })
// blueB.click(function(){
//     playSound("blue")
// })

let level = 1;
let seqPressed = [];

function setLevel(){
    $("#lvl").text(level);
}

setLevel(level)

function playSound(color){
    let aud = new Audio("./sounds/"+color+".mp3")
    aud.play()
}

$(document).keypress(function(){
    nextSequence()
})

$("button").click(function(){
    let butColor = ($(this).attr("class")).split(" ")[1];
    if (butColor != seqPressed.pop()){
        gameOver();
    }else{
        setTimeout(() => {
            playSound(butColor);
            level++
            nextSequence();
        }, 100);

    }
})

function getRandomColor(){
    let colorsToChose = ["green","red","yellow","blue"];
    let nmb = Math.floor(Math.random()*4)
    return colorsToChose[nmb]
}

function animatePress(nextColor){
    let nextButton = $("."+nextColor);
    nextButton.addClass("clicked")
    playSound(nextColor)
    setTimeout(function() {
        // Code to be executed after a delay
        nextButton.removeClass("clicked")
    }, 100)
}

function nextSequence(){
        setTimeout(() => {
            let nextColor = getRandomColor();
            seqPressed.push(nextColor);
            animatePress(nextColor);
        }, 100);

}


function gameOver(){
    console.log("game over!");
    let gameOverSound = new Audio("./sounds/wrong.mp3");
    gameOverSound.play();
}
