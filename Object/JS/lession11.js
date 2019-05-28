var person = {
    firstname : "Amit",
    lastname  : "Hazra",
    age         : 20,
    fullname   : function(){
        return this.firstname + " " + this.lastname;
    }
};
document.write(person.fullname());

var prsn = new Object();
prsn.firstname = "Amit";
prsn.lastname = "Hazra";
prsn.age = 20;
prsn.eyecolor = "blue";
document.write("<br/>" + prsn.firstname + " " + prsn.lastname);

x = prsn;
x.age = 22;
document.write("<br/>" + x.age);
document.write("<br/>" + prsn.age);

person.nationality = "Indian";
document.write("<br/>" + person.nationality);
delete person.age;
document.write("<br/>" + person.age);

function prson(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eye;
}

var myFather = new prson("Pradyut", "Hazra", 42, "Black", "Indian");
document.write("<br/>" + myFather.firstName + " " + myFather.lastName + " " + myFather.age + " " + myFather.eyecolor + " " + myFather.nationality);

myFather.nationality = "Indian";
document.write("<br/>" + myFather.nationality);

myFather.name = function(){
    return this.firstName + " " + this.lastName;
};
document.write("<br/>" + myFather.name());

prson.prototype.nationality = "Indian";
var myMother = new prson("Mala", "Hazra", 39, "Black");
document.write("<br/>" + myMother.firstName + " " + myMother.lastName + " " + myMother.age + " " + myMother.eyecolor + " " + myMother.nationality);
var mySister = new prson("Nivedita", "Manna", 18, "Black");
document.write("<br/>" + mySister.nationality);

prson.prototype.name = function(){
    return this.firstName + " " + this.lastName;
};
document.write("<br/>" + mySister.name());