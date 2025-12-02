(function (global) {
    "use strict";

    function parse() {
        const value = location.hash.slice(1);
        if (!value) {
            return null;
        }
        const parts = value.split(":");
        if (parts.length === 0 || parts.length > 3) {
            return null;
        }
        if (parts.some((part) => part === "")) {
            return null;
        }
        const numbers = parts.map((part) => Number(part));
        if (numbers.some((num) => Number.isNaN(num))) {
            return null;
        }

        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        if (numbers.length === 1) {
            [seconds] = numbers;
        } else if (numbers.length === 2) {
            [minutes, seconds] = numbers;
        } else {
            [hours, minutes, seconds] = numbers;
        }

        return seconds + minutes * 60 + hours * 3600;
    }

    global.HashParser = {
        parse,
    };
})(window);
