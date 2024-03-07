let timerDisplay = document.querySelector('.timerDisplay');
let stopbtn = document.getElementById('sbtn');
let startbtn = document.getElementById('stbtn');
let resetbtn = document.getElementById('Rbtn');

console.log(timerDisplay);

let msec = 0;
let second = 0;
let minutes = 0;
let timer = null;
let hours=0;

startbtn.addEventListener('click', function () {
    if (timer != null) {
        clearInterval(timer);
    }
    console.log(timer);
    timer = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function () {
    clearInterval(timer);
});

resetbtn.addEventListener('click', function () {
    clearInterval(timer);
    msec = 0;
    second = 0;
    minutes = 0;
    hours=0;
    timerDisplay.innerHTML = `00:00:00:00`;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        second++;
        if (second == 60) {
            second = 0;
            minutes++;
        }
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }

    let st, sec, min,hour;

    if (msec < 10) {
        st = `0${msec}`;
    } else {
        st = msec;
    }

    if (second < 10) {
        sec = `0${second}`;
    } else {
        sec = second;
    }

    if (minutes < 10) {
        min = `0${minutes}`;
    } else {
        min = minutes;
    }
    if (hours < 10) {
        hour= `0${hours}`;
    } else {
        hour = hours;
    }

    timerDisplay.innerHTML = `${hour}:${min}:${sec}:${st}`;
}
