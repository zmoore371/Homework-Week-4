var timeEl = document.querySelector(".timer")
var headerEl = document.querySelector(".quiz-header")
var quizBodyEl = document.querySelector(".quiz-body")
var quizFooterEl = document.querySelector(".quiz-footer")
var startButton = document.querySelector(".start-button")// have this link to a diffrent html
var answerList = document.querySelector(".answer-list")
const myQuestions = [
    {
        question: "Is JavaScript the same as Java?",
        answers: {
            a: "yes",
            b: "no", 
            c: "maybe",
            d: "ehhhhh"
        },
        correctAnswer: 'b',
        
        question: "What is my name",
        answers: {
            a: "zach",
            b: "zcac",
            c: "clkn",
            d: "slkj",
        },
        correctAnser: 'a',
    }
]


// secondsLeft = 10;
function startTimer(){
    timer = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = 'Timer: ' + secondsLeft;
      
      if(secondsLeft === 0) {
        clearInterval(timer);
        // call function to game over
      }
    

    }, 1000);
}

function startGame() {
    secondsLeft = 5;
    
    startTimer();
    startQuestions();

}

function startQuestions() {
    //add for loop later, just want to get a question to actually pop up first
    quizBodyEl.textContent = JSON.stringify(myQuestions)

}
startButton.addEventListener("click", startGame)