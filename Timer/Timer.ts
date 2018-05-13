class Timer {
    funcs = [];
    intervalId = null;

    constructor(private time){
    }

    tick(func){
        this.funcs.push(func);
    }

    start(){

            this.intervalId = setInterval(() => {
                for (let i = 0; i < this.funcs.length; i++) {
                this.funcs[i]();
            }},this.time);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
    }

    
}

main();

function main() {
    const timer = new Timer(1500);
    timer.tick(onTick1);
    timer.tick(onTick2);

    timer.start();

    function onTick1() {
        console.log("tick1");
    }

    let counter = 0;
    function onTick2() {
        console.log("tick2");

        if(++counter == 3){
            timer.stop();
        }
    }
}