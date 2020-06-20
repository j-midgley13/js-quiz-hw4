var content = document.getElementById("content");
var h4 = document.getElementById("fun");
var startBtn = document.getElementById("startbtn");
var timer = document.getElementById("timer");
var questionDiv = document.getElementById("question-div");
var questionsList = document.getElementById("questions");
var question = document.getElementById("question-display");

var arrayQuestions = [
    {
        q: "What HTML element does JavaScript use?",
        options: ["<body>", "<div>", "<script>"],
        a: "<script>"
    },

    {
        q: "How do you declare a string?",
        options: ["Quotation Marks", "Square Brackets", "Parentheses"],
        a: "Quotation Marks"
    },

    {
        q: "How do you declare a string?",
        options: ["Quotation Marks", "Square Brackets", "Parentheses"],
        a: "Quotation Marks"
    },

    {
        q: "Who invented JavaScript?",
        options: ["John Resig", "Brendan Eich", "Mark Otto"],
        a: "Brendan Eich"
    },
]