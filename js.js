var minElem = document.getElementById("min");
var secElem = document.getElementById("sec");
var min = 0;
var sec = 0;

// reset the clock
function resetClock() {
    minElem.innerHTML = "00";
    secElem.innerHTML = "00";
}

resetClock();
var setIntervalTimer;
var pos = 1;

// set interval timer
function launchTimer() {
    if (pos == 1)
        setIntervalTimer = setInterval(printTimer, 1000);
    pos++;
}

// print the timer
function printTimer() {
    sec++;
    // add min when you have 60sec
    if (sec >= 60) {
        sec = 0;
        min++;
    }
    // after 60min we stop the timer
    if (min == 60) {
        stopTimer();
    }
    // print minutes
    if (min == 0)
        minElem.innerHTML = '00';
    else if (min < 10)
        minElem.innerHTML = '0' + min;
    else
        minElem.innerHTML = min;
    // print seconds
    if (sec == 0)
        secElem.innerHTML = '00';
    else if (sec < 10)
        secElem.innerHTML = '0' + sec;
    else
        secElem.innerHTML = sec;
}

// stop the timer
function stopTimer() {
    pos = 1;
    clearInterval(setIntervalTimer);
}

function resetTimer() {
    stopTimer();
    resetClock();
    sec = 0;
    min = 0;
}