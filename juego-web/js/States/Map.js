function Map(objectJSON) {
    this.position = new Point(0, 0);
    this.updatedPosition = new Point(0, 0);
    
    this.widthOnTiles = parseInt(objectJSON.width);
    this.heightOnTiles = parseInt(objectJSON.height);
    
    this.widthOfTiles = parseInt(objectJSON.tilewidth);
    this.heightOfTiles = parseInt(objectJSON.tileheight);
    
    this.palettes = [];
    this.startPalettes(objectJSON.tilesets);
    
    this.layers = [];
    this.startLayers(objectJSON.layers);
    
    console.log("starting map.")
    
    this.startGrating();
}

Map.prototype.startPalettes = function(layersData) {
    for (var i = 0; i < layersData.length; i++) {
        this.palettes.push(new Palette(layersData[i]));
    }
}

Map.prototype.startLayers = function(layersData) {
    for (var i = 0; i < layersData.length; i++) {
        switch(layersData[i].type) {
            case "tilelayer":
                this.layers.push(new Layers(layersData[i], i - 100, this.widthOfTiles, this.heightOfTiles, this.palettes));
                break;
            case "objectgroup":
                
                break;
        }
    }
}

Map.prototype.startGrating = function() {
    var mapWidthOnPixels = this.widthOnTiles * this.widthOfTiles;
    var mapHeightOnPixels = this.heightOnTiles * this.heightOfTiles;
    
    var html = "";
    
    for (var ct = 0; ct < this.layers.length; ct++) {
        for (var t = 0; t < this.layers[ct].tiles.length; t++) {
            if(this.layers[ct].tiles[t] == null) {
               continue;
            }
            
            var currentTile = this.layers[ct].tiles[t];
            html += currentTile.html;
        }
    }
    
    document.getElementById("map").innerHTML = html;
    
    for (var ct = 0; ct < this.layers.length; ct++) {
        for (var t = 0; t < this.layers[ct].tiles.length; t++) {
            if(this.layers[ct].tiles[t] == null) {
               continue;
            }
            
            var currentTile = this.layers[ct].tiles[t];
            currentTile.applyStyle();
            
        }
    }
    
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

Map.prototype.update = function(tempLog, playerPositionPx) {
    this.position.x = playerPositionPx.x;
    this.position.y = playerPositionPx.y;
}

Map.prototype.draw = function() {
    for(var c = 0; c < this.layers.length; c++) {
        for(var i = 0; i < this.layers[c].tiles.length; i++) {
            this.layers[c].tiles[i].move(this.position.x, this.position.y);
        }
    }
}