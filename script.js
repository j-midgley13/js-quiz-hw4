var content = document.getElementById("content");
var h4 = document.getElementById("fun");
var startBtn = document.getElementById("startbtn");
var timer = document.getElementById("timer");
var scoreDisplay = document.getElementById("score");
var questionDiv = document.getElementById("question-div");
var questionsAnswers = document.getElementById("question-answers");
var question = document.getElementById("question-display");
var rightWrong = document.getElementById("right-wrong");
var seconds = 60;
var interval;
var i = 0;
var score = 0;
var k = 0;
var liCount = 1;

var questionArray = [
    {
        q: "What HTML element does JavaScript live in?",
        options: ["&lt;body&gt;", "&lt;div&gt;", "&lt;script&gt;"],
        a: "&lt;script&gt;"
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

// Starts timer countdown
function startTimer() {
    interval = setInterval( function() {
        seconds --;
        timer.innerHTML = ("Timer: " + seconds);
        // console.log(seconds);
        if (seconds < 0){
            stopTimer();
            alert("Gotta be quicker than that!");
            timer.innerHTML = ("Timer: 60")
        }
    }, 1000);
};

function stopTimer() {
    clearInterval(interval);
};

// Shows questions and answer options on page
// Still need to create answer selection function to cycle questions
function startQuestions(event) {
    h4.remove();
    startBtn.remove();

    if(questionArray[i] !== undefined) {
        question.textContent = questionArray[i].q;       
            for(var j = 0; j < questionArray[i].options.length; j++){
                var li = document.createElement("li");
                li.innerHTML = questionArray[i].options[j];
                li.setAttribute("id", j);
                li.style.listStyleType = "none";
                li.style.borderStyle = "solid";
                li.style.borderColor = "#5EEAD7";
                li.style.marginTop = "2px";
                li.style.marginBottom = "2px";
                li.style.textAlign = "center";
                question.append(li);

            }
     i++;    
    }
};



function pickAnswer(event) {
    event.preventDefault();

    if (event.target.matches("li")) {
        user = event.target.id;
        var selectedAnswer = questionArray[k].options[user];
            if (typeof user !== "undedfined") {
                rightWrong.innerHTML = "";

                if (selectedAnswer === questionArray[k].a) {
                    rightWrong.innerHTML = "Correct!";
                    rightWrong.style.fontStyle = "italic";
                    scoreDisplay.textContent = ("Score: " + (score + 1)  + "/5")
                    score++;
                    console.log(score)
                }

                else {
                    seconds = seconds - 5;
                    rightWrong.innerHTML = "Wrong!";
                    rightWrong.style.fontStyle = "italic";
                    
                }
                
                k++;
                
            }
            
         startQuestions();
            if (liCount === questionArray.length) {
                
                // resultsDisplay();
            }
            liCount ++;
    }
}




    
    

startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", startQuestions);
questionsAnswers.addEventListener("click", pickAnswer);