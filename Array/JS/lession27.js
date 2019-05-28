var fruits = ["Bananas", "Apples", "Guava", "Mango"];
document.write(fruits);
document.write("<br/>" + fruits[1]);

var cars = new Array("BMW", "Pulser", "Bazaz");
document.write("<br/>" + cars);
    
function fun(){
    document.getElementById("demo1").innerHTML = fruits.toString();
    document.getElementById("demo2").innerHTML = fruits.join(" * ");
}