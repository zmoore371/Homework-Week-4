var scoreList = $('#score-list')
var reset = $(".card")
highscoreList = JSON.parse(localStorage.getItem("Scores"))

function renderScores() {

  scoreList.innerHTML = "";
  for (var i = 0; i < highscoreList.length; i++) {
    var score = highscoreList[i];

    var li = document.createElement("li");
    li.textContent = score[0] + ": " + score [1];
    li.setAttribute("data-index", i);

    scoreList.append(li);
  }
}

function init() {

  var storedScores = JSON.parse(localStorage.getItem("Scores"));
  if (storedScores !== null) {
    scores = storedScores;
  }
  renderScores();
}

function clearLeaderboard() {
  window.localStorage.clear();
  location.reload();
}

reset.on("click", function(){
  clearLeaderboard();
})

init();