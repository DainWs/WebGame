function PlayerWorld(positionPx) {
    this.width = 64;
    this.height = 64;
    
    this.speed = 4;
    
    var centerX = dimension.width / 2 - this.width / 2;
    var centerY = dimension.height / 2 - this.height / 2;
    this.centerPosition = new Point(centerX, centerY);
    
    this.positionMapPx = positionPx;
}

PlayerWorld.prototype.applyStyle = function() {    
    var idHTML = "player";
    document.getElementById(idHTML).style.backgroundColor = "white";
    document.getElementById(idHTML).style.position = "absolute";
    document.getElementById(idHTML).style.left = this.centerPosition.x + "px";
    document.getElementById(idHTML).style.top = this.centerPosition.y + "px";
    document.getElementById(idHTML).style.width = this.width + "px";
    document.getElementById(idHTML).style.height = this.height + "px";
    document.getElementById(idHTML).style.zIndex = "-10";
}

PlayerWorld.prototype.update = function(tempLog) {
    if(keyboard.keyIsPressed(keyboardControls.up)) {
        this.positionMapPx.y += this.speed;
    }
        
    if(keyboard.keyIsPressed(keyboardControls.down)) {
        this.positionMapPx.y -= this.speed;
    }
        
    if(keyboard.keyIsPressed(keyboardControls.right)) {
       this.positionMapPx.x -= this.speed;
    }
       
    if(keyboard.keyIsPressed(keyboardControls.left)) {
        this.positionMapPx.x += this.speed;
    }
}