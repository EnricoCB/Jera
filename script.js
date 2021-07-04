let delay
let escolha
let cont = 0
let contPomodoro = 0
let duration = 60 * 25
let display = document.querySelector("#timer")
let timer = duration
let audio = new Audio('toque.wav');
let interval = document.getElementById("interval");
let timeInterval = 60 * 5
function startTimer(durationLocal, display) {
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
            document.getElementById("timer").style.color='#C7C6C6'
            timer = duration
            audio.play();
            cont += 1
            contPomodoro += 1
            document.getElementById("num").textContent = "Quantidade de pomodoros: " + contPomodoro
            if (interval.checked && cont % 2 == 1) {
                document.getElementById("timer").style.color='#8D3BCE'
                timer = timeInterval
                if (contPomodoro == 4) {
                    escolha = prompt('Você quer extender o tempo para 10 minutos de intervalo dessa vez? [S/N]: ')
                    if (escolha.toUpperCase() == "S") {
                        timer = 60 * 10
                    }
                    
                }
                startTimer(timer, display)
                contPomodoro -= 1
            }else{
                timer = duration
                document.getElementById("startPause").innerHTML =('<button onclick="start()" class="botao"><span>Start</span></button>');
            }   
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
    cont = 0
    timer = 60 * 25
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    document.getElementById("timer").style.color='#C7C6C6'
    display.textContent = minutes + ":" + seconds
}

function somar() {
    duration += 60
    console.log(duration)
}

document.addEventListener('DOMContentLoaded', function(){
    if(!Notification){
        return
    }
    if(Notification.permission !== "granted") 
    Notification.requestPermission()
})
