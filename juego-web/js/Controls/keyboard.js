var keyboard = {
    keys: new Array(),
    
    start: function() {
        document.onkeydown = keyboard.saveKey;
        document.onkeyup = keyboard.removeKey;
    },
    
    saveKey: function(e) {
        if (keyboard.keys.indexOf(e.key) == -1) {
            keyboard.keys.push(e.key);
        }
    },
    
    removeKey: function(e) {
        var keyPosition = keyboard.keys.indexOf(e.key);
        if (keyPosition !== -1) {
            keyboard.keys.splice(keyPosition, 1);
        }
    },
    
    keyIsPressed: function(codKey) {
        return (keyboard.keys.indexOf(codKey) !== -1);
    }
};