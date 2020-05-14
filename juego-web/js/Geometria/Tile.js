function Tile(xInTiles, yInTiles, z, width, height, sprite) {
    this.rectangle = new Rectangulo(xInTiles, yInTiles, width, height);
    this.zIndex = z;
    this.sprite = sprite;
    this.idHTML = "x" + xInTiles + "y" + yInTiles + "z" + z;
    this.html = '<div id="' + this.idHTML + '"></div>';
}

Tile.prototype.applyStyle = function() {
    if (!document.getElementById(this.idHTML)) {
        throw("El ID " + this.idHTML + " no existe");
    }
    
    document.getElementById(this.idHTML).style.position = "absolute";
	document.getElementById(this.idHTML).style.left = (this.rectangle.x * this.rectangle.width) + "px";
	document.getElementById(this.idHTML).style.top = (this.rectangle.y * this.rectangle.height) + "px";
	document.getElementById(this.idHTML).style.width = this.rectangle.width + "px";
	document.getElementById(this.idHTML).style.height = this.rectangle.height + "px";
	document.getElementById(this.idHTML).style.zIndex = "" + this.zIndex;
	document.getElementById(this.idHTML).style.background = "url('" + this.sprite.ruteSet + "')";

	var x = this.sprite.position.x;
	var y = this.sprite.position.y;
	
	document.getElementById(this.idHTML).style.backgroundPosition = "-" + x + "px -" + y + "px";
	document.getElementById(this.idHTML).style.backgroundClip = "border-box";
	document.getElementById(this.idHTML).style.outline = "1px solid transparent";
}

Tile.prototype.move = function(x, y) {
    document.getElementById(this.idHTML).style.transform = 'translate3d(' + x + 'px,' + y + 'px,' + '0)';
}