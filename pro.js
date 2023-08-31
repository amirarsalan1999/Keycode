let body = document.querySelector("body");

body.addEventListener("keydown" , function(event){
    document.getElementById("keycode").innerHTML = event.keyCode;
    document.getElementById("item1").innerHTML = event.key
    document.getElementById("item2").innerHTML = event.location
    document.getElementById("item3").innerHTML = event.which
    document.getElementById("item4").innerHTML = event.code
})