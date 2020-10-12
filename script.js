var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ____: ",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    // {
    //     question: "Entering Comments is a useless task, it will  not help in anyway: ",
    //     choices: ["true", "false"],
    //     answer: "false",
    // },
    // {
    //     question: "A short sections of code written to complete a task: ",
    //     choices: ["buffer", "array", "segment", "function"],
    //     answer: "function",
    // },
    // {
    //     question: "One loop inside the body of another loop is called: ",
    //     choices: ["loop in loop", "nested", "multi loop", "double loop"],
    //     answer: "nested",
    // },
    // {
    //     question: "What does HTML stand for?: ",
    //     choices: ["Hyper Text Markup Language", "Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Leveler"],
    //     answer: "Hyper Text Markup Language",
    // },
    // {
    //     question: "<h1>Text</h1> is the correct way of making a header in HTML: ",
    //     choices: ["true", "false"],
    //     answer: "true",
    // },
    // {
    //     question: "What does CSS stand for?: ",
    //     choices: ["colorful style sheets", "cascading style sheets", "creative style sheets", "computer style sheets"],
    //     answer: "cascading style sheets",
    // },
    // {
    //     question: "Which HTML tag is used to define an internal style sheet?: ",
    //     choices: ["<style>", "<inner>", "<css>", "<script>"],
    //     answer: "<style>",
    // },
    // {
    //     question: "How do you insert a comment in a CSS file?: ",
    //     choices: ["//this is a comment", "/*this is a comment*/", "'this is a comment", "//this is a comment//"],
    //     answer: "/*this is a comment*/",
    // },

];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
var pageBlock = document.querySelector(".page-block");

var questionIndex = 0;
var correctCount = 0;
var time = 4500;
var intervalId;

var startEl = document.querySelector("#start");
var startButton = document.querySelector("#start-button");

function startGame() {
    startEl.classList.add("hide");
    pageBlock.classList.remove("hide");
    renderQuestion();
}

function endQuiz() {
    clearInterval(intervalId);
    var body = document.body;
    body.innerHTML = "Game over, You scored " + correctCount;
    setTimeout(showHighScore, 2);
}

function showHighScore() {
    var name = prompt("Please enter your name");

    var high_scores = localStorage.getItem("scores");

    if (!high_scores) {
        high_scores = [];
    } else {
        high_scores = JSON.parse(high_scores);
    }

    console.log(high_scores);
    high_scores.push({ name: name, score: correctCount })

    console.log(correctCount);

    localStorage.setItem("scores", JSON.stringify(high_scores));

    high_scores.sort(function (a, b) {
        return b.score - a.score;
    });

    window.location.href="highscores.html";

}

function updateTime() {
    time--;
    timerEl.textContent = "Time: " + time;
    if (time <= 0) {
        endQuiz();
    }
}

function renderQuestion() {

    if (time == 0) {
        updateTime();
        return;
    }

    intervalId = setInterval(updateTime, 1000);
    questionEl.textContent = questions[questionIndex].question;

    optionListEl.innerHTML = "";
    questionResultEl.innerHTML = "";

    var choices = questions[questionIndex].choices;
    var choicesLenth = choices.length;

    for (var i = 0; i < choicesLenth; i++) {
        var questionListItem = document.createElement("button");
        questionListItem.setAttribute("type","button");
        questionListItem.setAttribute("class","btn-block");
        questionListItem.textContent = choices[i];
        optionListEl.append(questionListItem);
    }
}

function nextQuestion() {
    questionIndex++;
    if (questionIndex === questions.length) {
        time = 0;
    }
    renderQuestion();
}

function checkAnswer(event) {
    clearInterval(intervalId);
    if (event.target.matches("button")) {
        var answer = event.target.textContent;
        if (answer === questions[questionIndex].answer) {
            questionResultEl.textContent = "Correct";
            correctCount++;
        } else {
            questionResultEl.textContent = "Incorrect";
            time = time - 2;
            timerEl.textContent = time;
        }
    }
    setTimeout(nextQuestion, 2000);
}

//renderQuestion();


startButton.addEventListener("click", startGame);
optionListEl.addEventListener("click", checkAnswer);
