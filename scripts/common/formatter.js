(function (global) {
    "use strict";

    const ONE_SECOND = 1000;

    function formatSecond(milliseconds, mode) {
        const totalSeconds = Math.max(0, Math.floor(milliseconds / ONE_SECOND));
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const parsedSeconds = String(seconds).padStart(2, "0");

        if (hours > 0) {
            const parsedHours = String(hours).padStart(2, "0");
            const parsedMinutes = String(minutes).padStart(2, "0");
            if (mode === "html") {
                return `<span>${parsedHours}</span>h <span>${parsedMinutes}</span>m <span>${parsedSeconds}</span>s`;
            } else {
                return `${parsedHours}h ${parsedMinutes}m ${parsedSeconds}s`;
            }
        }

        const minutesToDisplay = Math.floor(totalSeconds / 60);
        const parsedMinutes = String(minutesToDisplay).padStart(2, "0");
        if (mode === "html") {
            return `<span>${parsedMinutes}</span>m <span>${parsedSeconds}</span>s`;
        } else {
            return `${parsedMinutes}m ${parsedSeconds}s`;
        }
    }

    global.Formatter = {
        formatSecond,
    };
})(window);
