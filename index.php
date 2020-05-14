<!DOCTYPE html>
<html lang="es">
    <head>
        <title>DainWs Game HTML</title>
        <meta charset="utf-8">
        <meta name="description" content="This is A Web Game">
        <meta name="author" content="Jose Antonio Duarte [DainWs]">
        
        <!-- CSS -->
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
    </head>

    <body>
        <header>

            <h1>A Game Maked by Jose Antonio Duarte P&eacute;rez</h1>

            <a class="github" href="https://github.com/DainWs">
                <img class="logo" src="images/html/github.png" />
                <p>Github</p>
            </a>
        </header>
        
        <main>
            <div id="game">
                <div id="map">
                </div>
                <div id="player">
                </div>
            </div>
        </main>
        
        <?php
            include_once 'juego-web/fileLoaderJS.inc.php';
        ?>
        
    </body>
</html>