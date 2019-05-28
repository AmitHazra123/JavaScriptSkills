var Person = {
    fullname : function(){
        return this.firstName + " " + this.lastName;
    }
};

var Person1 = {
    firstName: "Amit",
    lastName: "Hazra"
};

var Person2 = {
    firstName: "Nivedita",
    lastName: "Manna"
};

document.write(Person.fullname.call(Person1));
document.write("<br/>" + Person.fullname.call(Person2));