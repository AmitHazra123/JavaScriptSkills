var x = "10";
var y = 15;
var z = x + y;                                      //'+' operates as concatenation operator
document.write(z);

x = "100";
y = 10;
z = x / y;                                      //but '/' or other operators are not work as concatenation operator
document.write("<br/>" + z);

x = 100;
y = "Amit";
z = x / y;
document.write("<br/>" + z);            //NaN

document.write("<br/>" + isNaN(z));

document.write("<br/>" + typeof NaN);

var myNumber = 2;
while(myNumber != Infinity){
    myNumber = myNumber * myNumber;
    document.write("<br/>"+myNumber);
}

var x = 2;
var y = x / 0;
document.write("<br/>" + y);

var x = 0xFF;
document.write("<br/>" + x);
document.write("<br/>" + x.toString(16));               //toString() method display a number in a specific base format

var x = 500;
document.write("<br/>" + typeof x);
var x = new Number(500);
document.write("<br/>" + typeof x);

var a = 6.0678;
document.write("<br/>" + a.toFixed(0));
document.write("<br/>" + a.toFixed(2));
document.write("<br/>" + a.toFixed(5));

var b = 9.656;
document.write("<br/>" + b.toPrecision());
document.write("<br/>" + b.toPrecision(2));
document.write("<br/>" + b.toPrecision(4));
document.write("<br/>" + b.toPrecision(6));

document.write("<br/>" + b.valueOf());