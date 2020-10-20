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

* This will continue to happen until one of two conditions are met.

     * The set time hits zero
     * the quiz questions have been completed.

* The user is then asked to enter their name which will be displayed with their score on the highscores.html
* This is done using window.location.href="highscores.html";

* In the high scores page the high scores list is displayed in descending order with a back and clear button.

    * Go back takes us back to the quiz using 
        goBack.addEventListener("click", function(){
            window.location.href="index.html";
        });

    * clear clears the high scores list using 
        clearPage.addEventListener("click", function(){
            localStorage.clear();
            alert("Cleared all highscores");
            location.reload();
        });

## Project Link

https://devdan13.github.io/Code-Quiz/


## Demo Picture

![image](https://user-images.githubusercontent.com/69943020/96529563-86516980-1253-11eb-8d6f-e7e313a5829b.png)