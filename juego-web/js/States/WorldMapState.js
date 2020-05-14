function WorldMapState(stateID) {
    var that = this;
    this.mapIsReady = false;
    this.map = null;
    this.player = null;
    console.log("Loading Map.");
    
    ajax.loadFile("juego-web/maps/001_H.json", function(objectJSON){
        that.map = new Map(objectJSON);
        that.mapIsReady = true;
        that.player = new PlayerWorld(new Point(0, 0));
        that.player.applyStyle();
        console.log("Map loaded.");
    });
}

WorldMapState.prototype.update = function(tempLog) {
    if(!this.mapIsReady) {
        return;
    }
    this.player.update(tempLog);
    this.map.update(tempLog, this.player.positionMapPx);
}

WorldMapState.prototype.draw = function() {
    if(!this.mapIsReady) {
        return;
    }
    this.map.draw();
}
