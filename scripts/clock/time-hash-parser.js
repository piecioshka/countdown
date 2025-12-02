(function (global) {
    "use strict";

    const ONE_SECOND = 1000;
    const ONE_MINUTE = 60 * ONE_SECOND;

    function readLimitTime() {
        const formattedTime = location.hash.slice(1);
        if (!formattedTime) {
            return ONE_MINUTE;
        }
        const [minutes, seconds] = formattedTime.split(":").map(Number);
        if (Number.isNaN(minutes) || Number.isNaN(seconds)) {
            return ONE_MINUTE;
        }
        return ONE_SECOND * (seconds + minutes * 60);
    }

    global.TimeHashParser = {
        readLimitTime,
    };
})(window);
