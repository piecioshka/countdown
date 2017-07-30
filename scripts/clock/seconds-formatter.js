(function (global) {
    'use strict';

    const ONE_SECOND = 1000;

    class SecondsFormatter {
        static formatSecond(seconds) {
            let minutesToDisplay = Math.floor(seconds / 60 / ONE_SECOND);
            let secondsToDisplay = (seconds / ONE_SECOND) % (60);
            let parsedMinutes = String(minutesToDisplay).padStart(2, '0');
            let parsedSeconds = String(secondsToDisplay).padStart(2, '0');
            return `${parsedMinutes}:${parsedSeconds}`;
        }
    }

    global.SecondsFormatter = SecondsFormatter;

})(window);
