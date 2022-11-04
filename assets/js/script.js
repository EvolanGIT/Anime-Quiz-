//this is my timer function
var timeEl = document.querySelector(".time");

var secondsLeft = 60;

function clockDown() {
  // Sets interval in variable
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
    clearInterval(timerInterval);
    window.alert("you lost!!!");
    }
    }, 1000);
}
//clockDown works
//clockDown();
