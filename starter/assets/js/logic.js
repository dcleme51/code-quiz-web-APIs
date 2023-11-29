var timer = document.getElementById("time");
var totalTime = questions.length*10;
var timerId;


// GIVEN I am taking a code quiz
function startQuiz(){

// WHEN I click the start button
var startBtn = document.getElementById("start");


var startScreen = document.getElementById("start-screen");
startScreen.style.display = "none";

document.querySelector("#questions").classList.remove("hide")
renderQs();
};

function renderQs(){
document.querySelector("#question-title").textContent = questions[0].question
};

// THEN a timer starts and I am presented with a question
function startTimer(){
totalTime--;
timer.textContent =totalTime;
};


// var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// WHEN I answer a question


// THEN I am presented with another question


// WHEN I answer a question incorrectly


// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0


// THEN the game is over


// WHEN the game is over


// THEN I can save my initials and score
document.getElementById("startBtn").addEventListener("click", startQuiz); 