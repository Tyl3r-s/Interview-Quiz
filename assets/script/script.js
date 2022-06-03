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

// which question car you're on
var i = 0;
// total score variable
var score = 0;

// timer variable
var counter = 3;

// quiz box element
var questionContainer = document.getElementById("container");

var answerButtonsEl = document.getElementById("answer-buttons")

var questionEl = document.getElementById("insertQ")

// start button function
var startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startGame);

function startGame() {
    count = 50;
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    document.getElementById("count-box").style="color:green;";
    startTimer();
    showQuestionThree();
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
            if  (questionOne.correctAnswer == index) {
                console.log("correct");
                score++
            }
            else {
                console.log("wrong");
                counter = counter - 5;
            } 
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
            if  (questionTwo.correctAnswer == index) {
                console.log("correct");
                score++
            }
            else {
                console.log("wrong");
                counter = counter - 5;
            } 
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
            if  (questionThree.correctAnswer == index) {
                console.log("correct");
                score++
            }
            else {
                console.log("wrong");
                counter = counter - 5;
            } 
        })
    });
}

// quiz timer 
function startTimer() {
    
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count-box");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            quizEnd();
            clearInterval(counter);
        }
    }, 1000);
};

// The end of quiz 
function quizEnd() {
    answerButtonsEl.classList.add("hide");
    questionEl.textContent="Finish!";
};