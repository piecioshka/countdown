(function (global) {
    "use strict";

    class TimerComponent {
        constructor() {
            this.$element = document.querySelector(".clock");
        }

        setWarningStyle() {
            this.$element.classList.add("warning-text");
            document.body.classList.add("warning-background");
        }

        getDOMElement() {
            return this.$element;
        }

        displayTime(value) {
            this.$element.innerHTML = value;
        }
    }

    global.TimerComponent = TimerComponent;
})(window);
