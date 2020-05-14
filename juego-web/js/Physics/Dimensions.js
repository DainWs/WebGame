var dimension = {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    
    sideTiles: 100,
    scale: 1,
    
    start: function() {
        window.addEventListener("resize", function(evento) {
            dimension.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimension.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            console.log("Ancho: " + dimension.width + " | Alto : " + dimension.height );
            start.reloadTiles();
        });
    },
    
    getHorizontalTiles: function() {
        var finalSide = dimension.sideTiles * dimension.scale ;
        return Math.ceil((dimension.width - finalSide) / finalSide);
    },
    
    getVerticalTiles: function() {
        var finalSide = dimension.sideTiles * dimension.scale;
        return Math.ceil((dimension.height - finalSide) / finalSide);
    },
    
    getTotalTiles: function() {
        return dimension.getHorizontalTiles() * dimension.getVerticalTiles();
    }
};