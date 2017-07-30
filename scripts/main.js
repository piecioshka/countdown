(function (global) {
    'use strict';

    let AudioPlayer = global.AudioPlayer;
    let MoveMasterConnector = global.MoveMasterConnector;

    let Timer = global.Timer;
    let TimerComponent = global.TimerComponent;

    let NoteComponent = global.NoteComponent;

    const ALARM_AUDIO_PATH = './audio/Alarm_Clock.mp3';

    function setupClock() {
        let timer = new Timer();
        let timerUI = new TimerComponent(timer);

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
        let isPureDocumentClicked = (evt.target === document.body);

        if (!isPureDocumentClicked) {
            return;
        }

        let note = new NoteComponent({
            x: evt.pageX,
            y: evt.pageY
        });

        MoveMasterConnector.applyMoving(note);
    }

    global.addEventListener('DOMContentLoaded', setupClock);
    global.addEventListener('hashchange', location.reload.bind(location));
    global.addEventListener('dblclick', setupNotes);

})(window);
