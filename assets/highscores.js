scoreList = $('#score-list')

highscoreList = JSON.parse(localStorage.getItem("Scores"))


function renderScores() {

    scoreList.innerHTML = "";

    for (var i = 0; i < highscoreList.length; i++) {
      var score = highscoreList[i];
  
      var li = document.createElement("li");
      li.textContent = score;
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
  

init();