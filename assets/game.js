var timeEl = $(".timer");
var highscoreForm = $('.highscore-input')
var question = $("#question");
var answer1 = $(".choice-text1");
var answer2 = $(".choice-text2");
var answer3 = $(".choice-text3");
var answer4 = $(".choice-text4");
var button = $(".choice-container");
var correct = $(".correct");
var quizBox = $(".quiz-box");
// var saveButton = $("#save");
// var saveButton =$("btn-primary")

const myQuestions = [
    {
        question: "Is JavaScript the same as Java?",
        answers: ["yes","no", "maybe","ehhhhh"],
        correctAnswer: 2,
    },
    {    
        question: "What is my name",
        answers: ["zach", "zcac", "clkn","slkj"],
        correctAnswer: 1,
    },
    {
        question: "What temp is it?",
        answers: ["60", "70", "80", "90"],
        correctAnswer: 3,
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
    // button.hide();
    // question.remove();
    quizBox.remove();
    highscoreForm.show();
    clearInterval(timer);
    // console.log('hello')

}

function init(){
    secondsLeft = 10000;
    questionCounter = 0
    score = 0 
    startTimer();
    writeQustion();
    highscoreForm.hide();
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
var score = []
var initials = $(".highscore-input")

function saveHighScore() {
    var scoresList = {
        initials: initials.value,
        score: userScore
    }
    localStorage.setItem("leaderboard", JSON.stringify(scoresList));


    $("#save").on("click", function(event) {
        event.preventDefault();
        saveHighScore();
        console.log('hello')
    })
    

}

// saveButton.on("click", function(event) {
//     event.preventDefault();
//     saveHighScore();
//     console.log('hello')
// })




init();


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
