var timer = document.getElementById("time");
// var totalTime = questions.length * 10;
var totalTime = 125;
var timerId;
var startBtn = document.getElementById("start");
var feedbackEl = document.getElementById("feedback");
var index = 0;
var endDivEl = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");

// GIVEN I am taking a code quiz
function startQuiz() {
    startTimer();


    var startScreen = document.getElementById("start-screen");
    startScreen.style.display = "none";

    document.querySelector("#questions").classList.remove("hide")
    renderQs();
};
function handleAnwser() {
    //determine if its the correct awnser
    if (this.value != questions[0].answer) {
        totalTime -= 10;
        if (totalTime < 0) {
            totalTime = 0;
        }
        timer.textContent = totalTime;
        feedbackEl.textContent = "Wrong Awnser!";
    }
    else {
        feedbackEl.textContent = "Correct Awnser!";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 2000);

    index++;
    //check if you have comepleted the quiz
    if (index === questions.length) {
        endQuiz();
    } else {
        renderQs();
    }
};

// WHEN the game is over
function endQuiz() {
    //stop timmer 
    clearInterval(timerId);
    endDivEl.removeAttribute("class");

    //final score screen
    finalScore.textContent=totalTime;
    //hide question sections
    document.querySelector("#questions").setAttribute("class", "hide");


}
function renderQs() {
    document.querySelector("#question-title").textContent = questions[index].question;
    document.querySelector("#choices").innerHTML = "";
    for (i = 0; i < questions[index].choices.length; i++) {
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = questions[index].choices[i];
        choiceBtn.setAttribute("value", questions[index].choices[i]);
        // console.log(choiceBtn);
        choiceBtn.onclick = handleAnwser;
        document.querySelector("#choices").append(choiceBtn);
    }
};

// THEN a timer starts and I am presented with a question
function startTimer() {
    timer.textContent = totalTime;
    timerId = setInterval(function () {
        if (totalTime > 0) {
            totalTime--
            timer.textContent = totalTime;

        } else {
            clearInterval(timerId);
        }

    }, 1000);
};


function saveScores() {
    var scoreSheet = JSON.parse(localStorage.getItem("highScores")) || []
    var initials = document.getElementById("initials").value;
    var score = totalTime;
    var newScore = {
        initials,
        score
    }
    scoreSheet.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(scoreSheet));
   window.location.href="highscores.html" 
// console.log(scoreSheet)
//Display scores in the list 
var highScoresList = document.getElementById("highscores");
highScoresList.innerHTML = '';
for(var i = 0; i < scoreSheet.length; i++ ){
var entryOfScore = scoreSheet[i]
var listEl = document.createElement('li').innerHTML = entryOfScore
highScoresList.appendChild(listEl);
console.log(listEL);
}
};

document.getElementById(submit).addEventListener("click", saveScores);


// WHEN I answer a question


// THEN I am presented with another question


// WHEN I answer a question incorrectly


// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0


// THEN the game is over





// THEN I can save my initials and score

// WHEN I click the start button
startBtn.addEventListener("click", startQuiz); 