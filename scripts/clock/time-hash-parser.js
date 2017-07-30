(function (global) {
    'use strict';

    const ONE_SECOND = 1000;
    const ONE_MINUTE = 60 * ONE_SECOND;

    class TimeHashParser {
        static readLimitTime() {
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
    }

    global.TimeHashParser = TimeHashParser;

})(window);
