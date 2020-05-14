var ajax = {
    loadFile: function(rute, manipuler) {
        var petition = new XMLHttpRequest();
        
        // 0 No Start
        // 1 connected
        // 2 petition receibed
        // 3 process petition
        // 4 done
        petition.onreadystatechange = function() {
            if(petition.readyState == XMLHttpRequest.DONE) {
                if(petition.status == 200) {
                    manipuler(JSON.parse(petition.responseText));
                }
                else if(petition.status == 400) {
                    console.log("Error at loading File");
                }
            }
            
        };
        
        petition.open("GET", rute, true);
        petition.send();
    }
}