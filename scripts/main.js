(function (global) {
    'use strict';

    let Timer = global.Timer;
    let TimerUI = global.TimerUI;
    let AudioPlayer = global.AudioPlayer;
    let MoveMasterConnector = global.MoveMasterConnector;

    const ALARM_AUDIO_PATH = './audio/Alarm_Clock.mp3';

    function setup() {
        let timer = new Timer();
        let timerUI = new TimerUI(timer);

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

    global.addEventListener('DOMContentLoaded', setup);
    global.addEventListener('hashchange', location.reload.bind(location));

})(window);
