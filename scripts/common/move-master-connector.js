(function (global) {
    "use strict";

    const MoveMaster = global.MoveMaster;

    function applyMoving(movableElement) {
        MoveMaster({
            target: movableElement.getDOMElement(),
        });
    }

    global.MoveMasterConnector = {
        applyMoving,
    };
})(window);
