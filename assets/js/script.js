//this is my timer function variables.
var timeEl = document.querySelector(".time");
var startGame = document.querySelector("#start");
//this are my questions
let quest = [
{
    question1: "What is the Name of the Anime's main Character?>",
    choice1: "Toshinori Yagi a.k.a. All Might",
    choice2: "Izuku Midoriya a.k.a. Deku",
    choice3: "Enji Todoroki a.k.a. Endeavor",
    choice4: "Tenko Shimura a.k.a. Shigaraki",
    correct: "choice2"
},
{
    question2: "Who inherited All Might's superpower?",
    choice1: "Deku",
    choice2: "Bakugo",
    choice3: "Todoroki",
    choice4: "Shigaraki",
    correct: "choice1"
},
{
    question3: "Who becomes the number-one hero after All might retired?",
    choice1: "Hawks",
    choice2: "Dynamight",
    choice3: "Deku",
    choice4: "Endeavor",
    correct: "choice4"
},
{
    question4: "What is Bakugo's a.k.a.Dynamight superpower?",
    choice1: "Insults everytone to death",
    choice2: "Can fly at superspeed",
    choice3: "Shoots Lasers from his nostrils",
    choice4: "Ignites his sweat for an explosive effect",
    correct: "choice4"
},
{
    question5: "Where do the aspiring superheroes train to become professionals?",
    choice1: "They receiva a letter welcoming them to Hero-gwartz",
    choice2: "They all pay top dollar for Superschool",
    choice3: "They apply to U.A. Academy",
    choice4: "They take a 24 week online bootcamp where they get their license",
    correct: "choice3"
}
];

var secondsLeft = 60;

function clockDown() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
    clearInterval(timerInterval);
    window.alert("Sorry but you lost!!!");
    }
    }, 1000);
    
}

//timer works! needs fixing for a restart

//this function will start the game
startGame.addEventListener("click", function() {
//this starts the timer countdown while reseting it    
    clockDown();
//this prompts the questions    
});




