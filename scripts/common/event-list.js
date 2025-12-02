(function (global) {
    "use strict";

    class EventList {
        constructor() {
            this._list = [];
        }

        add(fn) {
            this._list.push(fn);
        }

        trigger() {
            this._list.forEach((fn) => fn.call(null));
        }
    }

    global.EventList = EventList;
})(window);
