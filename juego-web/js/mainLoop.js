var mainLoop = {
    executionID: null,
    lastLog: 0,
    aps: 0,
    fps: 0,
    iterator: function(temporalLog) {
        mainLoop.executionID = window.requestAnimationFrame(mainLoop.iterator);
        
        mainLoop.update(temporalLog);
        mainLoop.draw(temporalLog);
        
        if(temporalLog - mainLoop.lastLog > 999) {
            mainLoop.lastLog = temporalLog;
            console.log("APS: " + mainLoop.aps + " | " + "FPS: " + mainLoop.fps);
            mainLoop.aps = 0;
            mainLoop.fps = 0;
        }
    },
    stop: function() {
        
    },
    update: function(tempLog) {
        stateMachine.update(tempLog);
        
        mainLoop.aps++;
    },
    draw: function(temporalLog) {
        stateMachine.draw();
        mainLoop.fps++;
    }
};
