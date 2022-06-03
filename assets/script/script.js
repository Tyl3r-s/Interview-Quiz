// First question and answer array
let questionOne = {
    question: "Commonly used data types do NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 1
}
// Second question and answer array
let questionTwo = {
    question: "The condition in an if/else statement is enclosed with _____.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: 2
}
// Third question and answer array
let questionThree = {
    question: "Arrays in JavaScript are used to store _____.",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: 3
}
// global variables

// which question car you're on
var i = 0;
// total score variable
var score = 0;
// timer variable
var counter = 0;
// final score for local storage
var highScores = [];

// quiz box element
var questionContainer = document.getElementById("container");

// answer buttons element
var answerButtonsEl = document.getElementById("answer-buttons")

// question text element 
var questionEl = document.getElementById("insertQ")

// div element that holds end of game items
var finalScoreEl = document.getElementById("display-box")

// end score element
var scoreTextEl = document.getElementById("final-score")

// save your score button element
var saveScoreEl = document.getElementById("save-score")

// check high score
var highScoreEl = document.getElementById("hs-box")

// restart button element
var playAgainEl = document.getElementById("play-again")

// restart function
function playAgain() {
    playAgain = location.reload();
}

playAgainEl.addEventListener("click", playAgain, false);

// quiz timer 
function startTimer() {
    
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count-box");
            span.innerHTML = counter;
        }
        if (counter <= 0) {
            if (i < 4) {
            i = i * 0 + 3;
            quizEnd();
            clearInterval(counter);
        }
        }
    }, 1000);
};

// show high score
function showScores() {
    var savedScores = localStorage.getItem("highScores");
    highScores = JSON.parse(savedScores);
    alert(highScores);
}

highScoreEl.addEventListener("click", showScores);


// start button function
var startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startGame);

function startGame() {
    counter = 30;
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    document.getElementById("count-box").style="color:green;";
    startTimer();
    showQuestionOne();
};


// load question after start click
function showQuestionOne() {
    // show question
    let questionDiv = document.getElementById("insertQ");
    questionDiv.textContent = questionOne.question;

    // show answers
    let qAnswers = document.querySelectorAll(".answer");
    
    qAnswers.forEach(function(element, index){
        element.textContent = questionOne.answers[index];

        element.addEventListener('click', function(){
            // check for correct
            if (i==0) { i++;
            if  (questionOne.correctAnswer == index) {
                score++;
            }
            else {
                counter = counter - 5;
            }
            }
            showQuestionTwo();
        })
    });
}

function showQuestionTwo() {
    // show question
    let questionDiv = document.getElementById("insertQ");
    questionDiv.textContent = questionTwo.question;

    // show answers
    let qAnswers = document.querySelectorAll(".answer");
    
    qAnswers.forEach(function(element, index){
        element.textContent = questionTwo.answers[index];

        element.addEventListener('click', function(){
            // check for correct
            if (i==1) { i++;
            if  (questionTwo.correctAnswer == index) {
                score++
            }
            else {
                counter = counter - 5;
            }
            }
            showQuestionThree(); 
        })
    });
}

function showQuestionThree() {
    // show question
    let questionDiv = document.getElementById("insertQ");
    questionDiv.textContent = questionThree.question;

    // show answers
    let qAnswers = document.querySelectorAll(".answer");
    
    qAnswers.forEach(function(element, index){
        element.textContent = questionThree.answers[index];

        element.addEventListener('click', function(){
            // check for correct
            if (i==2) { i++;
            if  (questionThree.correctAnswer == index) {
                score++
            }
            else {
                counter = counter - 5;
            }
            }
            quizEnd();
        })
    });
return;
}

// The end of quiz 
function quizEnd() {
    if (i == 3) {i++;
    answerButtonsEl.classList.add("hide");
    questionEl.textContent="Finish!";
    questionEl.style.fontSize = "50px";
    counter = 0;
    finalScoreEl.classList.remove("hide");
    saveScoreEl.classList.remove("hide");
    scoreTextEl.textContent="Your final score is: " + score + "!";
    highScores.push(score);
    }
};

saveScoreEl.addEventListener("click", saveHighScore);

function saveHighScore() {
    var initials = window.prompt("What are your initials?")
if (initials === "" || initials === null) {
    window.alert("please enter your initials");
    return saveHighScore();
}
highScores.push(initials);
saveScore();
}


function saveScore() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}





