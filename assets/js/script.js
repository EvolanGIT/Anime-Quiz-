//this is my timer function variables.
var timeEl = document.querySelector(".time");
var startGame = document.querySelector("#start");
// //this is the timer and its variable for time, 
var secondsLeft = 60;
var timerInterval;
var penalty;

function clockDown() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if(secondsLeft <= 0) {//fix 
        clearInterval(timerInterval);
        window.alert("Sorry but you lost!!!");
    }
    }, 1000);
    
}

//this are the variables to call on all the quiz elements to the website
var question = document.getElementById("question");
var choice1 = document.getElementById("A");
var choice2 = document.getElementById("B");
var choice3 = document.getElementById("C");
var choice4 = document.getElementById("D");

//this are the questions
let quest = [
{
    question: "What is the Name of the Anime's main Character?",
    choice1: "Toshinori Yagi",
    choice2: "Izuku Midoriya",
    choice3: "Enji Todoroki",
    choice4: "Tenko Shimura",
    correct: "B"
},
{
    question: "Who inherited All Might's superpower?",
    choice1: "Deku",
    choice2: "Bakugo",
    choice3: "Todoroki",
    choice4: "Shigaraki",
    correct: "A"
},
{
    question: "Who becomes the number-one hero after All might retired?",
    choice1: "Hawks",
    choice2: "Dynamight",
    choice3: "Deku",
    choice4: "Endeavor",
    correct: "D"
},
{
    question: "What is Bakugo's a.k.a.Dynamight superpower?",
    choice1: "Insults everytone to death",
    choice2: "Can fly at superspeed",
    choice3: "Shoots Lasers from his nostrils",
    choice4: "Ignites his sweat for an explosive effect",
    correct: "D"
},
{
    question: "Where do the aspiring superheroes train to become professionals?",
    choice1: "They receiva a letter welcoming them to Hero-gwartz",
    choice2: "They all pay top dollar for Superschool",
    choice3: "They apply to U.A. Academy",
    choice4: "They take a 24 week online bootcamp where they get their license",
    correct: "C"
}];

//this will prompt the questions when the start button is clicked.
var quizStart = quest.length-1;
let currentQuestion = 0;

function askThis (){
    let trivia = quest[currentQuestion];
    question.innerHTML =trivia.question;
    choice1.innerHTML = trivia.choice1;
    choice2.innerHTML = trivia.choice2;
    choice3.innerHTML = trivia.choice3;
    choice4.innerHTML = trivia.choice4;
}

//this function checks for right or wrong answer and changes to the next question.
function choosing (checkAnswer) {
    penalty = secondsLeft - 15;
    console.log(checkAnswer);
    if (checkAnswer == quest[currentQuestion].correct){
        console.log("correct");
        greenlight();
        currentQuestion++
        if (quizStart >= currentQuestion) {
        askThis();
        }} 
    else if (checkAnswer != quest[currentQuestion].correct){
        console.log("incorrect");
        secondsLeft = penalty;
        redlight();
        currentQuestion++
        if (quizStart >= currentQuestion) {
        askThis();
    }}
}


//displays if the answer was right with a green queue.
function greenlight() {
    document.getElementById("right").style.backgroundColor = "#0f0";  
    } 

//displays if the answer was wrong with a red queue.
function redlight() {
    document.getElementById("wrong").style.backgroundColor = "#f00";
}



function youWin(){
    clearInterval(timerInterval);
    console.log(secondsLeft);
    //prompt name + 
    //input + secondsleft
}


//this function will start the game
startGame.addEventListener("click", function() {
    //this starts the timer countdown while reseting it    
    clockDown();
    askThis();
});

