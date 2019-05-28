var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

var x = document.getElementById("demo");
x.innerHTML = "Browser Inner Window width: " + w + ", height: " + h + ".";

function openWindow(){
    window.open("https://www.google.com", "scrollbars = yes", "resizable = yes", "width = 200", "height = 50", "top = 500", "left = 500");
}