function Layers(layerData, zIndex, widthOfTiles, heightOfTiles, palette) {
    this.widthOnTiles = parseInt(layerData.width);
    this.heightOnTiles = parseInt(layerData.height);
    
    this.x = parseInt(layerData.x);
    this.y = parseInt(layerData.y);
    this.z = zIndex;
    
    this.tiles = [];
    
    for (var y = 0; y < this.heightOnTiles; y++) {
        for (var x = 0; x < this.widthOnTiles; x++) {
            var idCurrentSpriteOne = layerData.data[x + y * this.widthOnTiles];
            if(idCurrentSpriteOne == 0) {
                this.tiles.push(null);
            }
            else {
                var currentSprite = this.findSpriteOnPaletteByID(idCurrentSpriteOne - 1, palette);
                this.tiles.push(new Tile(x, y, zIndex, widthOfTiles, heightOfTiles, currentSprite));
            }
        }
    }
}

Layers.prototype.findSpriteOnPaletteByID = function(idSpriteZero, palettes) {
    for(var s = 0; s < palettes.length; s++) {
        if(idSpriteZero >= palettes[s].firstSprite - 1 &&
           idSpriteZero < palettes[s].totalSprites + palettes[s].firstSprite + 1) {
            return palettes[s].sprites[Math.abs(palettes[s].firstSprite - 1 - idSpriteZero)];
        } else {
            console.log((palettes[s].firstSprite - 1) + " " + (palettes[s].totalSprites + palettes[s].firstSprite + 1));
        }
    }
    throw "No existe ningun sprite con esa id en estas paletas " + idSpriteZero;
} 