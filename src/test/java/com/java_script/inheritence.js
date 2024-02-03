// inheritence is the main pillar in object oriented programming 
// one class can inherit/accquire the properties,methods of another class
// the class which inherits the properties of other is known as subclass(derived class, child class)
// the class whose properties are inherited is known as superclass

const Person = require("./class")
class Vip extends Person

{
    get location()
    {
        return "India"
    }
    constructor(firstName,lastName)
    {
        // first you have to call the parent classs constructor
        super(firstName,lastName)
    }
}

let vip = new Vip("Ram","Shyam")
vip.fullName()
console.log(vip.location)
