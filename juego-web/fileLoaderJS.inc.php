<?php

$date = new DateTime();

$sourcesJS = array(
    "juego-web/js/Physics/Dimensions.js",
    "juego-web/js/MWorld/playerWorld.js",
    "juego-web/js/Geometria/Rectangulo.js",
    "juego-web/js/Geometria/Sprite.js",
    "juego-web/js/Geometria/Tile.js",
    "juego-web/js/Physics/Layers.js",
    "juego-web/js/Geometria/SpritesPalette.js",
    "juego-web/js/States/stateList.js",
    "juego-web/js/DataBase/ajax.js",
    "juego-web/js/States/WorldMapState.js",
    "juego-web/js/States/stateMachine.js",
    "juego-web/js/Physics/Point.js",
    "juego-web/js/States/Map.js",
    "juego-web/js/Controls/keyboardControls.js",
    "juego-web/js/Controls/keyboard.js",
    "juego-web/js/mainLoop.js",
    "juego-web/js/start.js"
);

foreach($sourcesJS as $source) {
    echo '<script src="' . $source . '?' . $date -> getTimestamp() . '"></script>';
    echo nl2br("\n");
}

?>