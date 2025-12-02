(function (global) {
    "use strict";

    const AudioPlayer = global.AudioPlayer;
    const MoveMasterConnector = global.MoveMasterConnector;

    const Timer = global.Timer;
    const TimerComponent = global.TimerComponent;

    const NoteComponent = global.NoteComponent;

    const ALARM_AUDIO_PATH = "./audio/Alarm_Clock.mp3";

    function setupClock() {
        const timer = new Timer();
        const timerUI = new TimerComponent(timer);

        function displayCurrentTime() {
            timerUI.displayTime(timer.getCurrentTime());
        }

        timer.finishedQueue.add(() => {
            AudioPlayer.playSound(ALARM_AUDIO_PATH);
            timerUI.setWarningStyle();
        });

        displayCurrentTime();

        timer.tickQueue.add(() => {
            displayCurrentTime();
        });

        MoveMasterConnector.applyMoving(timerUI);
    }

    function setupNotes(evt) {
        const isPureDocumentClicked = evt.target === document.body;

        if (!isPureDocumentClicked) {
            return;
        }

        const note = new NoteComponent({
            x: evt.pageX,
            y: evt.pageY,
        });

        MoveMasterConnector.applyMoving(note);
    }

    global.addEventListener("DOMContentLoaded", setupClock);
    global.addEventListener("hashchange", location.reload.bind(location));
    global.addEventListener("dblclick", setupNotes);
})(window);
