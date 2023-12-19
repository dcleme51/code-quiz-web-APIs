// creating a even listener to display the highscores
document.addEventListener("DOMContentLoaded", function () {
displayHS();
});
//using local storage to save the highscores
var scoreSheet = JSON.parse(localStorage.getItem("highScores")) || [];
var highScores2 = document.getElementById("highscores");

function displayHS(){
   for(var i = 0; i < scoreSheet.length; i++){
//save entry from the input of highscores initals
var listItem = document.createElement("li");
listItem.textContent = scoreSheet[i].initials + " - " + scoreSheet[i].score;

highscores.appendChild(listItem);
   };
  
   
// console.log(scoreSheet);
// console.log(scoreSheet[i].score)
};