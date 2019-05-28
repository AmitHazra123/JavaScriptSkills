//Variables
var a, b;
a = 5;
b = "String";
document.write(a);
document.write(b);
document.write("<br/>"+a+" "+b);
a = "a variable now contains a string";
document.write("<br/>"+a);
var x = 7;
var y = 8;
var z = (x == y);
document.write("<br/>"+z);

//Arrays
var cars = ["BMW", "Saav", "Volvo"];
document.write("<br/>"+cars);
document.write("<br/>"+cars[0]);

//Objects
var person = {
    firstname: "Amit",
    lastname: "Hazra",
    age: 20,
    eyecolor: "black"};
document.write("<br/>"+person.firstname);

//typeof operator
document.write("<br/>" + typeof x);
document.write("<br/>" + typeof b);
var m;
document.write("<br/>" + typeof m);
cars = null;
document.write("<br/>" + typeof cars);
x = null;                                                                             //Now x is going to be an object
document.write("<br/>" + typeof x);                                     //Null is an object;

//typeof function
document.write("<br/>" + typeof function fun(){});