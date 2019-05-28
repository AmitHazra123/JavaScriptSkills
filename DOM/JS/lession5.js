window.addEventListener("resize", myFunction);
function myFunction(){
    document.getElementById("demo").innerHTML = "You have resized the window.";
}
//window.removeEventListener("resize", myFunction);             //For removing event listener