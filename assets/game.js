var timeEl = $(".timer");

var question = $("#question");
var answer1 = $(".choice-text1");
var answer2 = $(".choice-text2");
var answer3 = $(".choice-text3");
var answer4 = $(".choice-text4");
var button = $(".choice-container")
// var button1 = $('.choice-container1');
// var button2 = $('.choice-container2');
// var button3 = $('.choice-container3');
// var button4 = $('.choice-container4');


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
questionNumber = 0 //if i increment this by 1 it will change the question and answer choices
userScore = 0

function writeQustion() {
    question.text(myQuestions[questionNumber].question)
    answer1.text(myQuestions[questionNumber].answers[0])
    answer2.text(myQuestions[questionNumber].answers[1])
    answer3.text(myQuestions[questionNumber].answers[2])
    answer4.text(myQuestions[questionNumber].answers[3])
    // button.click(userAnswer());//this successfully runs useranswer on button click
    
}


// function getNewQuestion() {


// }


button.click(userAnswer())


function userAnswer() {
    $("button").click(function() {
        var fired_button = $(this).val();
        var isCorrect = +fired_button 
        rightAnswer = myQuestions[questionNumber].correctAnswer
        if(rightAnswer === isCorrect){
            userScore = userScore+100
            console.log(userScore)
            isRightAnswer(); 
            return userScore;
        
        } else {
            isRightAnswer();
        }
        
        
        // console.log(fired_button);
        // console.log(typeof rightAnswer); //firedbutton is a number here\
        
        // isRightAnswer();
        



    });
    
    
    
   

function isRightAnswer(){
    // var isCorrect 
    // console.log(isCorrect)///WHY THE FUCK IS THIS RUNNING BEFORE THE FUNCTION IS FUCKING CALLED 

    // rightAnswer = myQuestions[questionNumber].correctAnswer
    // console.log(rightAnswer)//right answer is correctly selecting the number from array

    


    questionNumber++

    //if current question is not greater than question length, 

    writeQustion();

    //else endquiz, show results

}





writeQustion();

function init(){
    secondsLeft = 15;

    questionCounter = 0
    score = 0 
    // getNewQuestion();
    
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
}