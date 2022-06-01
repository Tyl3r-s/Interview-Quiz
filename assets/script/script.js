var questions = [
    {
        question: "Commonly used data types do NOT include:",
        asnwers: [
            {text: "strings", correct: false },
            {text: "booleans", correct: true},
            {text: "alerts", correct: false},
            {text: "numbers", correct: false}
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        answers: [
            {text: "quotes", correct: false },
            {text: "curly brackets", correct: true},
            {text: "parenthesis", correct: false},
            {text: "square brackets", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript are used to store _____.",
        answers: [
            {text: "numbers and strings", correct: false },
            {text: "other arrays", correct: true},
            {text: "booleans", correct: false},
            {text: "all of the above", correct: false}
        ]
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: [
            {text: "commas", correct: false },
            {text: "curly brackets", correct: true},
            {text: "quotes", correct: false},
            {text: "parenthesis", correct: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "javascript", correct: false },
            {text: "terminal/bash", correct: true},
            {text: "for loops", correct: false},
            {text: "console.log", correct: false}
        ]
    }
];

var startButton = document.getElementById("start-btn");

var questionContainer = document.getElementById("container");

var time = document.getElementById("count-box");

var countDown = "75";



startButton.addEventListener("click", startGame);

function startTimer() {
    var counter = 60;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count-box");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert ("finish!");
            clearInterval(counter);
        }
    }, 1000);
}

function startGame() {
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    document.getElementById("count-box").style="color:green;";
    startTimer();
};



