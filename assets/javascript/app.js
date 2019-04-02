let timeremaining = 10 //should this be in seconds?
let rightanswers = 0;
let wronganswers = 10;

var Interval = setInterval(startcountdown, 1000);
 // Run this code at every interval


//IMPORTANT in the above line of code i thought startcountdown() was correct
// but it only ran once, when I removed the () it decrememented by a 1 second countdown like expected

function startcountdown() {
    if (timeremaining === 0) {
        $("input:checked").each(function () {
            if ($(this).hasClass("correct")) {
                rightanswers++;
                wronganswers--;
            }
        })
        console.log(rightanswers + " right answers")
        console.log(wronganswers + " wrong answers")
        clearInterval(Interval)//This will stop the code from running every 1 second, stops the countdown
        
    } else {
        $("#countdown").text(timeremaining);
        timeremaining--;
        console.log(timeremaining)
    }

}