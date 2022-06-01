var questions = [
    {
        question: "Commonly used data types do NOT include:",
        asnwers: [
            {text: "strings", correct: false },
            {text: "booleans", correct: true},
            {text: "alerts", correct: false},
            {text: "numbers", correct: false}
        ]
    }
]

// var question = [];
// question[0]= "Commonly used data types do NOT include:";
// question[1]= "The condition in an if / else statement is enclosed with ______.";
// question[2]= "Arrays in javascript are used to store _____.";
// question[3]= "String values must be enclosed within _____ when being assigned to variables.";
// question[4]= "A very useful tool used during development and debugging for printing content to the debugger is:";

// var answer = [];
// answer[0]= "strings";
// answer[1]= "booleans";
// answer[2]= "alerts";
// answer[3]= "numbers";
// answer[4]= "quotes";
// answer[5]= "curly brackets";
// answer[6]= "parenthesis";
// answer[7]= "square brackets";
// answer[8]= "numbers and strings";
// answer[9]= "other arrays";
// answer[10]= "booleans";
// answer[11]= "all of the above";
// answer[12]= "commas";
// answer[13]="curly brackets";
// answer[14]= "quotes";
// answer[15]= "parenthesis";
// answer[16]= "javascript";
// answer[17]= "terminal/bash";
// answer[18]= "for loops";
// answer[19]= "console.log";

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

