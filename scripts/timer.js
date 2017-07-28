(function (global) {
    'use strict';

    const ONE_SECOND = 1000;

    class Timer {
        constructor() {
            this.tickQueue = new EventList();
            this.finishedQueue = new EventList();

            this._currentTime = 0;
            this._limitTime = TimeHashParser.readLimitTime();

            this._clock = setInterval(() => {
                this._makeTick();
                this.tickQueue.trigger();

                if (this._isTimeEnded()) {
                    this._onCountingFinish();
                }
            }, ONE_SECOND);
        }

        _makeTick() {
            this._currentTime += ONE_SECOND;
        }

        _isTimeEnded() {
            return this._currentTime > this._limitTime - ONE_SECOND;
        }

        _onCountingFinish() {
            clearInterval(this._clock);
            this.finishedQueue.trigger();
        }

        getCurrentTime() {
            return this._limitTime - this._currentTime;
        }
    }

    global.Timer = Timer;
})(window);
