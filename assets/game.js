var timeEl = $(".timer");

var question = $("#question");
var answer1 = $(".choice-text1");
var answer2 = $(".choice-text2");
var answer3 = $(".choice-text3");
var answer4 = $(".choice-text4");




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
    }//PUT A COMMA HER FOR THE NEXT QUESTION DINGUS
]
maxQuestions = 4



function writeQustion() {
    
    for (i=0; i<maxQuestions; i++) {
    question.text(myQuestions[0].question)
    answer1.text(myQuestions[0].answers[0])
    answer2.text(myQuestions[0].answers[1])
    answer3.text(myQuestions[0].answers[2])
    answer4.text(myQuestions[0].answers[3])
    }

    
   
    
}


function getNewQuestion() {


}

writeQustion();
















function init(){
    secondsLeft = 15;

    questionCounter = 0
    score = 0 
    avaliableQuestions = [...myQuestions]
    getNewQuestion();
    
    startTimer();

}

function startTimer(){
    timer = setInterval(function() {
      secondsLeft--;
      timeEl.text('Timer: ' + secondsLeft);
      
      if(secondsLeft === 0) {
        clearInterval(timer);
        // call function to game over
      }
    

    }, 1000);
}

init();