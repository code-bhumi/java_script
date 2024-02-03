const Person = require('./class')
let day = 'Thrusday '
console.log(day.length)         // will give full length of string starts from 0

let subday = day.slice(0,5)     // will give the specified part of the string  (tue)
console.log(subday)             
console.log(day[5])             // will give the particular letter of string
// thru   day

let splitday = day.split("s")
console.log(splitday[1].length)
console.log(splitday[1].trim().length)

let date = 23
let currentdate = 28
let diff = parseInt(currentdate) - parseInt(date)
console.log(diff)
diff.toString()

let newQuote = day + "is Funday"
console.log(newQuote)
let index = newQuote.indexOf("day",6)
console.log(index)

let count = 0
let value = newQuote.indexOf("day")
while(value != -1)
{
    count++
    value = newQuote.indexOf("day",value+1)
}
console.log(count)

let person = new Person("Meenakshi","Pal")
console.log(person.fullName())