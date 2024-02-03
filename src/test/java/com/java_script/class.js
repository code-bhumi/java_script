module.exports = class Person
{
    age = 27
    // location = "Australia"

    get location()
    {
        return "Australia"
    }
    // constructor is a method which executes by default when you create object of the class

    constructor(firstName,lastName)
    {
        this.firstName = firstName
        this.lastName  = lastName
    }

    // this is a method
    fullName()
    {
        console.log(this.firstName+" "+this.lastName)
    }

}

// let person = new Person("Siya","Ram")
// let person1 = new Person("Radhey","Krishna")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())

// if you want to use this class in other comment out the bottom part 