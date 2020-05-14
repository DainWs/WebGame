var stateMachine = {
    currentState: null,
    start: function() {
        stateMachine.changeState(stateList.WORLD_MAP);
    },
    changeState: function(newState) {
        switch(newState) {
            case stateList.LOADING:
                break;
            case stateList.START_MENU:
                break;
            case stateList.WORLD_MAP:
                stateMachine.currentState = new WorldMapState(stateList.WORLD_MAP);
                break;
            case stateList.LEVEL_MAP:
                break;
        }
    },
    update: function(tempLog) {
        stateMachine.currentState.update(tempLog);
        
    },
    draw: function() {
        stateMachine.currentState.draw();
    }
}