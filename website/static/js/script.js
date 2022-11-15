
function change_text_h(){
    document.getElementById("header").innerHTML = "Hello";
}
function change_text_g(){
    document.getElementById("header").innerHTML = "Goodbye";
}



const button = document.getElementById("b801");



button.addEventListener('click', event => {
    document.getElementById("header").innerHTML = "Goodbye";
  });


var counter = 0;
var intervalId = null;
function finish() {
clearInterval(intervalId);
document.getElementById("textp").innerHTML = "TERMINE!";	
}
function bip() {
    counter++;
    if(counter == 20) finish();
    else {	
        document.getElementById("textp").innerHTML = counter;
    }	
}
function count(){
intervalId = setInterval(bip, 1000);
}	
