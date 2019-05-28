//Sort
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
document.write(fruits);
fruits.reverse();
document.write("<br/>" + fruits);

//Numeric Sort
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b;});
document.write("<br/>" + points);
points.sort(function(a, b){return b - a;});
document.write("<br/>" + points);

//Compare Function
function fun(a, b){
    return a - b;
}
document.write("<br/>" + fun(40, 100));

//Sorting an Array in Random Order
points.sort(function(){return 0.5 - Math.random()});
document.write("<br/>" + points);

//Max and Min value of an Array
document.write("<br/> Maximum value of the array is: " + Math.max.apply(null, points));
document.write("<br/> Minimum value of the array is: " + Math.min.apply(null, points));

//Sorting Objects
var cars = [
            {type: "volvo", year: 2016},
            {type: "Saab", year: 2001},
            {type: "BMW", year: 2010}];
cars.sort(function(a, b){return a.year - b.year;});
function display(){
    document.getElementById("demo").innerHTML = cars[0].type + " " + cars[0].year + "<br>" +
                                                                        cars[1].type + " " + cars[1].year + "<br>" +
                                                                        cars[2].type + " " + cars[2].year;
}