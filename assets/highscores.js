var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var scoreList = document.querySelector("#score-list");


function renderScores() {
    // TODO: Describe the functionality of the following two lines of code.
    scoreList.innerHTML = "";

    // TODO: Describe the functionality of the following `for` loop.
    for (var i = 0; i < todos.length; i++) {
      var score = todos[i];
  
      var li = document.createElement("li");
      li.textContent = score;
      li.setAttribute("data-index", i);
  
      li.appendChild(button);
      todoList.appendChild(li);
    }
  }
  