// creating a even listener to display the highscores
// document.addEventListener("DOMContentLoaded", function () {
// displayHS();
// });

//using local storage to save the highscores
// var scoreSheet = JSON.parse(window.localStorage.getItem("highScores")) || [];
// var highScores2 = document.getElementById("highscores");

function displayHS(){
    var scoreSheet = JSON.parse(window.localStorage.getItem("highScores")) || [];
var highScores2 = document.getElementById("highscores");
   for(var i = 0; i < scoreSheet.length; i++){
//save entry from the input of highscores initals
var listItem = document.createElement("li");
listItem.textContent = scoreSheet[i].initials + " - " + scoreSheet[i].score;

highscores.appendChild(listItem);
   };



// console.log(scoreSheet);
// console.log(scoreSheet[i].score)
};

  
// creating a click event, when clearing the highscores is clicked you will restart the quiz.
function clearHighScores () {
    window.localStorage.removeItem("highScores");
    window.location.reload();
};

document.getElementById("clear").onclick = clearHighScores;

displayHS();