// object is a collection of properties

let person = {

    firstName : 'Radhe',               // these are the properties of object called person
    lastName  : 'Krishna',
    fullName  : function()
    {
        console.log(this.firstName + this.lastName)
    }
}

console.log(person.fullName())
console.log(person.firstName)           // either way can be used to get value
console.log(person["lastName"])   

person.firstName = "God"           // can change the sxistinh properties
console.log(person.firstName)

person.appearence = "nirakar"                // can add any property
console.log(person)

delete person.appearence                    // can delete the property
console.log(person)

// print all the values of the object person

for(let key in person)
{
    console.log(person[key])
}


