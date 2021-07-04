let delay
let duration = 60 * 25
let display = document.querySelector("#timer")
let timer = duration
let audio = new Audio('toque.wav');
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
            audio.play();
            document.getElementById("startPause").innerHTML =('<button onclick="start()" class="botao"><span>Start</span></button>');
        }

    }, 1000)
} 
function start() {
    startTimer(duration, display) 
    document.getElementById("startPause").innerHTML =('<button onclick="pause()" class="botao"><span>Pause</span></button>');
}

function pause() {
    clearInterval(delay)
    document.getElementById("startPause").innerHTML =('<button onclick="start()" class="botao"><span>Start</span></button>');
}

function reset() {
    document.getElementById("startPause").innerHTML =('<button onclick="start()" class="botao"><span>Start</span></button>');
    clearInterval(delay);
    timer = 60 * 25
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    display.textContent = minutes + ":" + seconds
}