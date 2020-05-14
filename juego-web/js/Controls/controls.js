var controls = {
    up: false,
    down: false,
    left: false,
    right: false,
    update: function() {
        if(keyboard.keyIsPressed(keyboardControls.up)) {
            controls.up = true;
        }
        
        if(keyboard.keyIsPressed(keyboardControls.down)){
            controls.down = true;
        }
        
        if(keyboard.keyIsPressed(keyboardControls.left)){
            controls.left = true;
        }
        
        if(keyboard.keyIsPressed(keyboardControls.right)){
            controls.right = true;
        }
    },
    restart: function() {
        this.up=false;
        this.down=false;
        this.left=false;
        this.right=false;
    }
};