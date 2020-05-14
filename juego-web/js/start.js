//Wait until HTML loads
var start = {
    initiators: [
        dimension.start(),
        stateMachine.start(),
        keyboard.start(),
        mainLoop.iterator()
    ],
    startGame: function() {
        start.chainBeginnings(start.initiators.shift());
    },
    chainBeginnings: function(starter) {
        if(starter) {
           starter(() => start.chainBeginnings(start.initiators.shift()));
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    start.startGame();
}, false);