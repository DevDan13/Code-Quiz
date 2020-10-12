# Code-Quiz

## Quiz framework

* Quiz framework developed.  The quiz asks the user a series of coding questions. 

* The quiz has a timer of 45 seconds and a link to a second page. The highscores.html page.

* In the quiz the user is greeted with a brief description of the quiz and its purpose, and also has a working get started button using the 
    addeventlistener("click",function(){}) method.

    var startEl = document.querySelector("#start");
    var startButton = document.querySelector("#start-button");

    function startGame() {
        startEl.classList.add("hide");
        pageBlock.classList.remove("hide");
        renderQuestion();
    }

    * once clicked the quiz begins!

* The question is asked and the answers are neatly displayed under it.



* These answers respond to their respective buttons and display a message to the user being either **"Correct"** or **"Incorrect"**.

* The next question is then loaded and displayed to the user after 2 seconds. this is all done within the check answer function as follows:

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

    * here the setTimeout function calls nextQuestion function after 2 seconds.
    