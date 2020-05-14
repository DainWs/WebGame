function Palette(layersData) {
    this.rutaImage = layersData.image;
    this.widthImage = parseInt(layersData.imagewidth);
    this.heightImage = parseInt(layersData.imageheight);
    
    this.widthSprite = parseInt(layersData.tilewidth);
    this.heightSprite = parseInt(layersData.tileheight);
    
    this.firstSprite = parseInt(layersData.firstgid);
    
    this.WidthImageInSprites = this.widthImage / this.widthSprite;
    this.HeightImageInSprites = this.heightImage / this.heightSprite;
    this.totalSprites = this.WidthImageInSprites * this.HeightImageInSprites;
    
    this.sprites = [];
    
    for(var s = 0; s < this.totalSprites; s++) {
        var currentID = this.firstSprite - 1 + s;
        this.sprites.push(new Sprite(this.rutaImage, currentID, this.getPositionFromID(currentID)));
    }
}

Palette.prototype.getPositionFromID = function(idZero) {
    var y = Math.floor(idZero / this.WidthImageInSprites);
    var x = idZero % this.WidthImageInSprites;
    
    return new Point(x * this.widthSprite, y * this.heightSprite);
}