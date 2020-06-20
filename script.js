var content = document.getElementById("content");
var h4 = document.getElementById("fun");
var startBtn = document.getElementById("startbtn");
var timer = document.getElementById("timer");
var questionDiv = document.getElementById("question-div");
var questionsList = document.getElementById("questions");
var question = document.getElementById("question-display");
var seconds = 60;
var interval;
var i = 0;

var arrayQuestions = [
    {
        q: "What HTML element does JavaScript live in?",
        options: ["<body>", "<div>", "<script>"],
        a: "<script>"
    },

    {
        q: "How do you declare a string?",
        options: ["Quotation Marks", "Square Brackets", "Parentheses"],
        a: "Quotation Marks"
    },

    {
        q: "What symbol is used for adding comments in Javascript?",
        options: ["<-- add comment here -->", "// add comment here", "*/ add comment here"],
        a: "// add comment here"
    },

    {
        q: "How do you create a DIV element in JavaScript?",
        options: ["document.createElement('div');", "div = createElement.body();", "You cannot create a div."],
        a: "document.createElement('div');"
    },

    {
        q: "Who invented JavaScript?",
        options: ["John Resig", "Brendan Eich", "Mark Otto"],
        a: "Brendan Eich"
    },
]

function startTimer() {
    interval = setInterval( function() {
        seconds --;
        timer.innerHTML = ("Timer: " + seconds);
        // console.log(seconds);
        if (seconds < 0){
            stopTimer();
            alert("Gotta be quicker than that!");
        }
    }, 1000);
};

function stopTimer() {
    clearInterval(interval);
};

startBtn.addEventListener("click", startTimer);
// startBtn.addEventListener("click", startQuestions);