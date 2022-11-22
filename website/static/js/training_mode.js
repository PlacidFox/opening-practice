const color = "red";

var script = document.currentScript;

function training_test(){
    document.getElementById("textp").innerHTML = "Test Training Mode - White";

    var json = []
    fetch('./data/test_json.json').then(response => json = response.json())
        
     //setBoard("white");

}


