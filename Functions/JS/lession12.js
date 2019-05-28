var Person = {
    fullname : function(city, district){
        return this.firstName + " " + this.lastName + " from " + city + ", " + district;
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

document.write(Person.fullname.apply(Person1, ["Kolkata", "West Bengal"]));
document.write("<br/>" + Person.fullname.apply(Person2, ["Purulia", "West Bengal"]));