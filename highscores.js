var displayScore = document.querySelector("#highscores");
var body = document.body;
var high_score = localStorage.getItem("Scores");
var scoreOl = document.createElement("ol");
var goBack = document.querySelector("#go-back");
var clearPage = document.querySelector("#clear-page");


var high_scores = JSON.parse(localStorage.getItem("scores"));

high_scores.sort(function (a, b) {
    return b.score - a.score;
});

var contentOL = document.createElement("ol");

for (var i = 0; i < high_scores.length; i++) {
    var contentLI = document.createElement("li");
    contentLI.textContent =
        "Name: " + high_scores[i].name + " Score: " + high_scores[i].score;
    contentOL.appendChild(contentLI);
}

body.appendChild(contentOL);


goBack.addEventListener("click", function(){
    window.location.href="index.html";
});

clearPage.addEventListener("click", function(){
    localStorage.clear();
    alert("Cleared all highscores");
    location.reload();
});
