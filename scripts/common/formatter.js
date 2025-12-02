(function (global) {
    "use strict";

    const ONE_SECOND = 1000;

    function formatSecond(seconds) {
        const minutesToDisplay = Math.floor(seconds / 60 / ONE_SECOND);
        const secondsToDisplay = (seconds / ONE_SECOND) % 60;
        const parsedMinutes = String(minutesToDisplay).padStart(2, "0");
        const parsedSeconds = String(secondsToDisplay).padStart(2, "0");
        return `${parsedMinutes}:${parsedSeconds}`;
    }

    global.Formatter = {
        formatSecond,
    };
})(window);
