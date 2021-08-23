var timeEl = document.querySelector(".timer")
var headerEl = document.querySelector(".quiz-header")
var quizBodyEl = document.querySelector(".quiz-body")
var quizFooterEl = document.querySelector(".quiz-footer")
var startButton = document.querySelector(".start-button")




// secondsLeft = 10;
function startTimer(){
    timer = setInterval(function() {
      
      timeEl.textContent = 'Timer: ' + secondsLeft;
      secondsLeft--;
      if(secondsLeft === 0) {
        clearInterval(timer);
        // call function to game over
      }
    

    }, 1000);
}

function startGame() {
    secondsLeft = 75;
    startTimer();
}


startButton.addEventListener("click", startGame)