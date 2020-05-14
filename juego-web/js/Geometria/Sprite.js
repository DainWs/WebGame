function Sprite(rute, id, position) {
    var ruteElements = rute.split("/");
    this.ruteSet = "juego-web/images/" + ruteElements[ruteElements.length - 1];
    this.idZero = id;
    this.idOne = this.idZero + 1;
    this.position = position;
}