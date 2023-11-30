var timer = document.getElementById("time");
// var totalTime = questions.length * 10;
var totalTime = 5
var timerId;
var startBtn = document.getElementById("start");

// GIVEN I am taking a code quiz
function startQuiz() {
startTimer();
    

    var startScreen = document.getElementById("start-screen");
    startScreen.style.display = "none";

    document.querySelector("#questions").classList.remove("hide")
    renderQs();
};

function renderQs() {
    document.querySelector("#question-title").textContent = questions[0].question
for(i=0; i < questions[0].choices.length; i++){
var choiceBtn = document.createElement("button");
choiceBtn.textContent = questions[0].choices[i];
// console.log(choiceBtn);
document.querySelector("#choices").append(choiceBtn);
}};

// THEN a timer starts and I am presented with a question
function startTimer() {
    timer.textContent = totalTime;
  timerId = setInterval(function(){
    if (totalTime > 0){
        totalTime--
        timer.textContent = totalTime;
    
    } else {
        clearInterval(timerId);
    }

  }, 1000);
};



// WHEN I answer a question


// THEN I am presented with another question


// WHEN I answer a question incorrectly


// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0


// THEN the game is over


// WHEN the game is over


// THEN I can save my initials and score

// WHEN I click the start button
startBtn.addEventListener("click", startQuiz); 