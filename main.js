const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;

let currentTime = 0;
let limitTime = null;
let $place = null;
let clock = null;

function playSound(src) {
    let audio = new Audio(src);
    audio.load();
    audio.play();
}

function playAlarm() {
    playSound('./audio/Alarm_Clock.mp3');
}

function displayTime(seconds) {
    $place.innerText = formatSecond(seconds);
}

function setWarningStyle() {
    $place.classList.add('warning-text');
    document.body.classList.add('warning-background');
}

function formatSecond(seconds) {
    let minutesToDisplay = Math.floor(seconds / 60 / ONE_SECOND);
    let secondsToDisplay = (seconds / ONE_SECOND) % (60);
    return String(minutesToDisplay).padStart(2, '0')
        + ':'
        + String(secondsToDisplay).padStart(2, '0');
}

function getCurrentTime() {
    return limitTime - currentTime;
}

function finishCounting() {
    clearInterval(clock);
    setWarningStyle();
    playAlarm();
}

function readLimitTime() {
    let formattedTime = location.hash.slice(1);
    if (!formattedTime) {
        return ONE_MINUTE;
    }
    let [minutes, seconds] = formattedTime.split(':');
    minutes = Number(minutes);
    seconds = Number(seconds);
    if (Number.isNaN(minutes) || Number.isNaN(seconds)) {
        return ONE_MINUTE;
    }
    return ONE_SECOND * (seconds + minutes * 60);
}

function setup() {
    $place = document.querySelector('h1');
    limitTime = readLimitTime();
    displayTime(getCurrentTime());

    clock = setInterval(() => {
        currentTime += ONE_SECOND;
        displayTime(getCurrentTime());

        if (currentTime > limitTime - ONE_SECOND) {
            finishCounting();
        }
    }, ONE_SECOND);
}

window.addEventListener('DOMContentLoaded', setup);
window.addEventListener('hashchange', location.reload.bind(location));
