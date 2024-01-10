## Code Quiz Challenge 

In this project we will be creating code to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write.

Installation In order to contribute to the task we must install Visual Studio Code. We would also need to install an extension within Visual Studio Code to run and open a live server in the browser such as in 'chrome' so we are able to see what appears within the console. We will require a terminal/bash to create a repository that will enable us to push the code base onto GitHub. For this we will need to install Gitbash as well.

For this challenge we were provided with the starter codes for the html, CSS and the JavaScript file. As part of the Acceptance Criteria the following requirements were to be executed. 

Create a code quiz that contains the following requirements:

* A start button that when clicked a timer starts and the first question appears.
 
  * Questions contain buttons for each answer.

  * When answer is clicked, the next question appears

  * If the answer clicked was incorrect then subtract time from the clock

* The quiz should end when all questions are answered or the timer reaches 0.

  * When the game ends, it should display their score and give the user the ability to save their initials and their score

First, we created a repository on GitHub in which we will save the changes and commits of to keep track of progress along with structuring the files. Using the acceptance Criteria as above we then pseudocode to break down each point using a variety of techniques including the use of arrays to create the questions, functions and for loops to iterate through the questions and click events to proceed to the next set of question. In order to create the timer, we used a function with if function so the timer would start as soon as the user started the quiz and 10 seconds was deducted for every wrong selected answer. To create the high scores, we used the local Storage attribute where users were able to input the initials in which their score will also be displayed alongside this. 

Reflection: The assignment was challenging at first but I was able to use a variety of resource to help achieve the end result of this project where I was able to achieve a code quiz. The main challenge for me was the high scores and displaying this on the page but I managed to overcome this with some help. 

Resources: https://www.w3schools.com/js/default.asp

Credits: Instructor and TAs from the bootcamp, AskBSC community members and special thanks to tutor Scott Everet for helping me across this challenge.

Licence I have chosen to go with the MIT licence as it allows people to do almost anything to the project to help improve the website further if required. It is also a simple and permissive I’m comparison to other licences.
