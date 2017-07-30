(function (global) {
    'use strict';

    class TimerUI {
        constructor() {
            this.$element = document.querySelector('h1');
        }

        setWarningStyle() {
            this.$element.classList.add('warning-text');
            document.body.classList.add('warning-background');
        }

        getDOMElement() {
            return this.$element;
        }

        displayTime(seconds) {
            this.$element.innerText = SecondsFormatter.formatSecond(seconds);
        }
    }

    global.TimerUI = TimerUI;
})(window);
