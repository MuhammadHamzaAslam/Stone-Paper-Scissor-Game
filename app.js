let img = document.querySelector(".img")
let com = document.querySelector(".com")
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let btn = document.getElementById("reset")
let comScoreDisplay = document.getElementById('com_score');
let urScoreDisplay = document.getElementById('ur_score');
let comScore = 0;
let urScore = 0;

function updateScore() {
    comScoreDisplay.innerText = comScore; 
    urScoreDisplay.innerText = urScore; 
}
function ro() {
    img.src="img/rock-right.png"
    let random1 = Math.ceil(Math.random()*3)
    if (random1 == 1) {
        com.src="img/rock-left.png"
    }
    else if (random1 == 2){
        com.src="img/paper.png"
        comScore++
        
    }
    else{
        com.src="img/scissor-left.png"
       urScore++
    }
    updateScore()
}
function pap() {
    img.src="img/paper.png"
    let random1 = Math.ceil(Math.random()*3)
    if (random1 == 1) {
        com.src="img/rock-left.png"
       urScore++
    }
    else if (random1 == 2){
        com.src="img/paper.png"
    }
    else{
        com.src="img/scissor-left.png"
       comScore++
    }
    updateScore()
}
function sciss() {
    img.src="img/scissor-right.png"
    let random1 = Math.ceil(Math.random()*3)
    if (random1 == 1) {
        com.src="img/rock-left.png"
        comScore++
    }
    else if (random1 == 2){
        com.src="img/paper.png"
        urScore++
    }
    else{
        com.src="img/scissor-left.png"
    }
    updateScore()
}
function resetAll() {
    urScore = 0
    comScore = 0
    comScoreDisplay.innerText = comScore
    urScoreDisplay.innerText = urScore
}
rock.addEventListener("click",ro)
paper.addEventListener("click",pap)
scissor.addEventListener("click",sciss)
btn.addEventListener("click",resetAll)



