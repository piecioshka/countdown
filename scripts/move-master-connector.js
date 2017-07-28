(function (global) {
    'use strict';

    let MoveMaster = global.MoveMaster;

    function applyMoving(movableElement) {
        MoveMaster({
            target: movableElement.getDOMElement()
        });
    }

    global.MoveMasterConnector = {
        applyMoving
    }

})(window);
