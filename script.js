let delay
var duration = 60 * 25
var display = document.querySelector("#timer")
var timer = duration
function startTimer(duration, display) {
    delay = setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds
        if (--timer < 0) {
            window.clearInterval(delay);
        }
        if (timer < 0) {
            timer = duration
            console.log(duration)
            document.getElementById("startPause").innerHTML =('<button onclick="start()"><span>Start</span></button>');
        }

    }, 1000)
} 
function start() {
    startTimer(duration, display) 
    document.getElementById("startPause").innerHTML =('<button onclick="pause()"><span>Pause</span></button>');
}

function pause() {
    clearInterval(delay)
    document.getElementById("startPause").innerHTML =('<button onclick="start()"><span>Start</span></button>');
}

function reset() {
    document.getElementById("startPause").innerHTML =('<button onclick="start()"><span>Start</span></button>');
    window.clearInterval(delay);
    timer = 60 * 25
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    display.textContent = minutes + ":" + seconds
}