// Global Vars, mostly getting html elements
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
            window.location.reload();
            timer.innerHTML = ("Timer: 60")
        }
    }, 1000);
};

function stopTimer() {
    clearInterval(interval);
};

// Shows questions and answer options on page
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


// Cycles through questions and returns right and wrong answers
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
                
            resultsDisplay();

            }
            liCount ++;
    }
}

// Clears questions divs and shows form to submit score
function resultsDisplay() {
    stopTimer();
    question.remove();
    rightWrong.remove();

    var congratsEL = document.createElement("h3");
    congratsEL.innerHTML = "You made it!";
    questionDiv.append(congratsEL);

    var endScore = document.createElement("p");
    endScore.innerHTML = "Final score: " + score + "/5";
    questionDiv.append(endScore);

    var formEl = document.createElement("form");
    var fieldsetEl = document.createElement("fieldset");
    var formDiv = document.createElement("div");
    var labelEl = document.createElement("label");
    var inputEl = document.createElement("input");
    var submitBtn = document.createElement("button");

    formDiv.setAttribute("class", "form-group");

    labelEl.setAttribute("for", "TextInput");
    labelEl.textContent = "Enter initials below:"

    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("id", "TextInput");
    inputEl.setAttribute("class", "form-control");
    inputEl.setAttribute("placeholder", "Initials");

    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("class", "btn btn-dark");
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.textContent = "Submit";
    
    questionDiv.append(formEl);
    formEl.append(fieldsetEl);
    fieldsetEl.append(formDiv);
    formDiv.append(labelEl);
    formDiv.append(inputEl);
    fieldsetEl.append(submitBtn);
         
};

// Grabs score and initials for local storage
document.addEventListener("click",function(event){
    event.preventDefault();
  if(event.target.id === 'submitBtn'){
     var userInit = document.getElementById("TextInput").value.trim();
     console.log(userInit);
     if(userInit === ""){
         alert("Enter two initials");
        
        }
     }
localStorage.setItem("TextInput", JSON.stringify(userInit));
localStorage.setItem("score", JSON.stringify(score));
     
});

//Ran out of time, had trouble with JSON and returning it. Something to continue to educate myself on!

// Event listeners to start quiz, timer, and select answers
startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", startQuestions);
questionsAnswers.addEventListener("click", pickAnswer);


 