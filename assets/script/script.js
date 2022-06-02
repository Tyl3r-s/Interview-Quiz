// array containing all of the questions and answers
var questions = [
    {question: "Commonly used data types do NOT include:"},
    {question: "The condition in an if/else statement is enclosed with _____."},
    {question: "Arrays in JavaScript are used to store _____."},
    {question: "String values must be enclosed within _____ when being assigned to variables."}, 
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:"}
];

var answers = [
    {text: "strings", correct: false},
    {text: "booleans", correct: true},
    {text: "alerts", correct: false},
    {text: "numbers", correct: false},
    {text: "quotes", correct: false },
    {text: "curly brackets", correct: false},
    {text: "parenthesis", correct: true},
    {text: "square brackets", correct: false},
    {text: "numbers and strings", correct: false },
    {text: "other arrays", correct: false},
    {text: "booleans", correct: false},
    {text: "all of the above", correct: true},
    {text: "commas", correct: false },
    {text: "curly brackets", correct: true},
    {text: "quotes", correct: false},
    {text: "parenthesis", correct: false},
    {text: "javascript", correct: false },
    {text: "terminal/bash", correct: false},
    {text: "for loops", correct: true},
    {text: "console.log", correct: false}
];

// variables
var pageContentEl = document.querySelector("#page-content");

var startButton = document.getElementById("start-btn");

var questionContainer = document.getElementById("container");

var time = document.getElementById("count-box");

var answerButtonsEl = document.querySelector("#answer-buttons");

var questionEl = document.getElementById("insertQ");

var answerEl = document.getElementById("ansr-btn");

var ansrOneEl = document.querySelector("#ansr-btn1");

var ansrTwoEl = document.querySelector("#ansr-btn2");

var ansrThreeEl = document.querySelector("#ansr-btn3");

var ansrFourEl = document.querySelector("#ansr-btn4");

var ansr1 = 0

var ansr2 = 1

var ansr3 = 2

var ansr4 = 3

var counter = 50;

var score = 0;

var startQuiz = 0;

var questionCount = 0;

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

// start button function

startButton.addEventListener("click", startGame);

function startGame() {

    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    document.getElementById("count-box").style="color:green;";
    startTimer();
    loadQuestion();
    loadAnswers();
};

function loadAnswers() {
    ansrOneEl.textContent=answers[ansr1].text
    ansrTwoEl.textContent=answers[ansr2].text
    ansrThreeEl.textContent=answers[ansr3].text
    ansrFourEl.textContent=answers[ansr4].text
    ansr1 = ansr1 + 3;
    ansr2 = ansr2 + 3;
    ansr3 = ansr2 + 3;
    ansr4 = ansr2 + 3;
};


function loadQuestion() {
    if (startQuiz < 5) {
        questionEl.textContent=questions[questionCount].question;
        answerQuestion();
        loadAnswers();
    }
    else {
       quizEnd();
    }
    questionCount++;
    startQuiz++;
};

function answerQuestion() {
    ansrOneEl.addEventListener("click", loadQuestion);
    ansrTwoEl.addEventListener("click", loadQuestion);
    ansrThreeEl.addEventListener("click", loadQuestion);
    ansrFourEl.addEventListener("click", loadQuestion);
};

function quizEnd() {
    answerButtonsEl.classList.add("hide");
    questionEl.textContent="Finish!"
    counter = 0;
};
