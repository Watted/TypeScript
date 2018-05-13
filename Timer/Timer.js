var Timer = /** @class */ (function () {
    function Timer(time) {
        this.time = time;
        this.funcs = [];
        this.intervalId = null;
    }
    Timer.prototype.tick = function (func) {
        this.funcs.push(func);
    };
    Timer.prototype.start = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            for (var i = 0; i < _this.funcs.length; i++) {
                _this.funcs[i]();
            }
        }, this.time);
    };
    Timer.prototype.stop = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
    };
    return Timer;
}());
main();
function main() {
    var timer = new Timer(1500);
    timer.tick(onTick1);
    timer.tick(onTick2);
    timer.start();
    function onTick1() {
        console.log("tick1");
    }
    var counter = 0;
    function onTick2() {
        console.log("tick2");
        if (++counter == 3) {
            timer.stop();
        }
    }
}
//# sourceMappingURL=Timer.js.map