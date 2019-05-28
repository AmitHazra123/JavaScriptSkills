var d = new Date();
document.write(d);

//Date Declaration Format
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
document.write("<br/>" + d);

//Date Declaration of previous century
var d = new Date(99, 11, 24);
document.write("<br/>" + d);

//Date Initialization with String Format
var d = new Date("October 13, 2014 11:13:00");
document.write("<br/>" + d);

document.write("<br/>" + d.toString());
document.write("<br/>" + d.toUTCString());
document.write("<br/>" + d.toDateString());

document.write("<br/>" + Date.parse(d));

var d = new Date();
var mesc = d.parse();
document.write("<br/>" + mesc);