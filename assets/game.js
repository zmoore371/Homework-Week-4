var timeEl = $(".timer");
// var highscoreForm = $('.highscore-input')
var initialsForm = $('.initials-form')
var yourScore = $('.your-score-was')
var question = $("#question");
var answer1 = $(".choice-text1");
var answer2 = $(".choice-text2");
var answer3 = $(".choice-text3");
var answer4 = $(".choice-text4");
var button = $(".choice-container");
var correct = $(".correct");
var quizBox = $(".quiz-box");


const myQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<scripting>","<js>", "<script>","<javascript>"],
        correctAnswer: 3,
    },
    {    
        question: "What method returns the first index at which a given element can be found in an array, or -1 if it is not present?",
        answers: ["getIndex()", "location()", "indexOf()","None of the above"],
        correctAnswer: 3,
    },
    {
        question: "What method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. ?",
        answers: ["reverse()", "shift()", "slice()", "some()"],
        correctAnswer: 4,
    }
        
        //PUT A COMMA HER FOR THE NEXT QUESTION DINGUS
]
maxQuestions = 3 // change this number to max num questions, could also probably compare to array length but this seems easier for now
questionNumber = 0 //if i increment this by 1 it will change the question and answer choices
userScore = 0

function writeQustion() {
    question.text(myQuestions[questionNumber].question)
    answer1.text(myQuestions[questionNumber].answers[0])
    answer2.text(myQuestions[questionNumber].answers[1])
    answer3.text(myQuestions[questionNumber].answers[2])
    answer4.text(myQuestions[questionNumber].answers[3])
}

button.click(userAnswer())

function userAnswer() {
    $("button").click(function() {
        var fired_button = $(this).val();
        var isCorrect = +fired_button 
        rightAnswer = myQuestions[questionNumber].correctAnswer
        if(rightAnswer === isCorrect){
            userScore = userScore+100
            console.log(userScore)
            nextQuestion(); 
            correct.show();
            setTimeout(function() {correct.hide(); }, 1000)
            return userScore;
            
        
        } else {
            nextQuestion();
        }
    });
}
    
function nextQuestion(){
    questionNumber++
    
    if(questionNumber < maxQuestions){
       writeQustion();
    } else {
        console.log('no more questions')
        endGame();
    }
    
}

function endGame() { 
    quizBox.remove();
    initialsForm.show();
    yourScore.text("Congats! Your score was: " + userScore)
    clearInterval(timer);
    timeEl.hide();
    
}

function init(){
    secondsLeft = 10000;
    questionCounter = 0
    score = 0 
    startTimer();
    writeQustion();
    initialsForm.hide();
    correct.hide();
}

function startTimer(){
    timer = setInterval(function() {
      secondsLeft--;
      timeEl.text('Timer: ' + secondsLeft);
      
      if(secondsLeft === 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
}

init();

var initialsInput = $('#input-text')
var highscoreList = JSON.parse(localStorage.getItem("Scores"));

function storeInitials() {
    localStorage.setItem("Scores", JSON.stringify(highscoreList))
}

initialsForm.on("submit", function(event) {
    event.preventDefault();
    var initialsText = initialsInput.val();
    console.log(initialsText)
    localStorage.getItem("Scores")
    if(initialsText === "") {
        return;
    }
    highscoreList.push([initialsText,userScore]);
    console.log('Hello')
    storeInitials();
    window.location.href="./highscores.html"
})

// var storedScores = JSON.parse(localStorage.getItem("Scores"));











// saveButton.on("click", function(event) {
//     event.preventDefault();
//     saveHighScore();
//     console.log('hello')
// })

// button.click(function(){
//     answerChoice = this.button.text();
//     console.log(answerChoice) 
// })

// var buttonResult = $(function(){
//     $("button").click(function() {
//         var fired_button = $(this).val();
//         alert(fired_button);
//     });
// });

// console.log(buttonResult);

// let ans = $("button").click(function() {
//     var fired_button = $(this).val();
//     alert(fired_button);
//     console.log(fired_button)
//     console.log(typeof fired_button)
// });

// console.log(fired_button)

// using the button method above you are able to store the number of the button clicked. now we need to figure out how to turn it from a sring to an interger and compare it to the correct answer under each question; lunchtime 


// var abc = "16"
// var abcd = +abc
// console.log(typeof abcd)  PROOF OF CONCEPT
// console.log(typeof abc)


 // ansNum = +ans
    // console.log(ans)
    // console.log(fired_button)
    // if (ans !== myQuestions[questionNumber].correctAnswer) {
    //     console.log('Hello')
    //     questionNumber + 1

    // }

    // if (isNaN(ansNum) === false){
    //     console.log('hiya')
    //     console.log(ansNum)
    //     console.log(typeof ansNum)
    //     // checkRightAnswer(); //oops
    // } else {
    //     console.log(ansNum)
    // }

    // var score = []
// var initials = $(".highscore-input")

// function saveHighScore() {
//     var scoresList = {
//         initials: initials.value,
//         score: userScore
//     }
//     localStorage.setItem("leaderboard", JSON.stringify(scoresList));


//     $("#save").on("click", function(event) {
//         event.preventDefault();
//         saveHighScore();
//         console.log('hello')
//     })
    

// }