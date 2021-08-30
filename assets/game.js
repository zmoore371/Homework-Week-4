var timeEl = $(".timer");
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
var initialsInput = $('#input-text')
var highscoreList = []

const myQuestions = [
    {
        question: "Inside which HTML element do we put JavaScript?",
        answers: ["<scripting>", "<js>", "<script>", "<javascript>"],
        correctAnswer: 3,
    },
    {
        question: "What method returns the first index at which a given element can be found in an array, or -1 if it is not present?",
        answers: ["getIndex()", "location()", "indexOf()", "None of the above"],
        correctAnswer: 3,
    },
    {
        question: "What method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false?",
        answers: ["reverse()", "shift()", "slice()", "some()"],
        correctAnswer: 4,
    },
    {
        question: "What array function adds or removes elements from an array?",
        answers: ["unshift()", "sort()", "toSource()", "splice()"],
        correctAnswer: 4,
    },
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        answers: ["The User's machine running a Web browser", "The Web server", "A central machine deep within Netscape's corporate offices", "None of the above"],
        correctAnswer: 1,
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        answers: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "None of the above"],
        correctAnswer: 1,
    },
    {
        question: "Which of the following best describes JavaScript?",
        answers: ["a low-level programming language.", "a scripting language precomplied in the browser.", "a complied scripting language", "an object-oriented scripting language"],
        correctAnswer: 4,
    } //PUT A COMMA HER FOR THE NEXT QUESTION DINGUS

]
maxQuestions = 7 // change this number to max num questions, could also probably compare to array length but this seems easier for now
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
    $("button").click(function () {
        var fired_button = $(this).val();
        var isCorrect = +fired_button
        rightAnswer = myQuestions[questionNumber].correctAnswer
        if (rightAnswer === isCorrect) {
            userScore = userScore + 100
            console.log(userScore)
            nextQuestion();
            correct.show();
            setTimeout(function () { correct.hide(); }, 1000)
            return userScore;


        } else {
            nextQuestion();
        }
    });
}

function nextQuestion() {
    questionNumber++

    if (questionNumber < maxQuestions) {
        writeQustion();
    } else {
        console.log('no more questions')
        endGame();
    }

}

function endGame() {
    quizBox.remove();
    initialsForm.show();
    yourScore.text("Congrats! Your score was: " + userScore)
    clearInterval(timer);
    timeEl.hide();

}

function init() {
    secondsLeft = 180;
    questionCounter = 0
    score = 0
    startTimer();
    writeQustion();
    initialsForm.hide();
    correct.hide();
    var storedScores = JSON.parse(localStorage.getItem("Scores"))
    if (storedScores !== null) {
        highscoreList = storedScores
    }
}

function startTimer() {
    timer = setInterval(function () {
        secondsLeft--;
        timeEl.text('Timer: ' + secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function storeInitials() {
    localStorage.setItem("Scores", JSON.stringify(highscoreList))
}

initialsForm.on("submit", function (event) {
    event.preventDefault();
    var initialsText = initialsInput.val();
    console.log(initialsText)
    localStorage.getItem("Scores")
    if (initialsText === "") {
        return;
    }

    highscoreList.push([initialsText, userScore]);

    storeInitials();
    window.location.href = "./highscores.html"
})

init();










