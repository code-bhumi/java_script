var marks = Array(6)

var marks = [94,87,82,79,95,98]

subMarks = marks.slice(1,4)
console.log(subMarks)
console.log(marks[3])       //this give you the output of third subject marks

marks[1] = 91               // this is used to change the value
console.log(marks)          // now the o/p should be updated 
console.log(marks.length)   // will give the total no of items present in the array
marks.push(85)              // will add at the end
console.log(marks)
marks.pop()                 // will delete the last one
marks.unshift(96)             // will add at the start of array
console.log(marks)
console.log(marks.indexOf(79))  // will tell you the position of element in array
console.log(marks.includes(130))    // this is used to search for a element in the array  
var sum = 0
for(let i=0; i<marks.length; i++)
{
    console.log(marks[i])
    sum = sum + marks[i]
}
console.log(sum)   // sum of all the elements

// reduce , filter, map

let total = marks.reduce((sum,mark) => sum+mark,0)    // easy way of getting sum by using reduce method
console.log(total)

var score = [78,63,72,90,95,87,86]
var evenscore = []
for(let i=0; i<score.length; i++)
{
    if(score[i] % 2 == 0)
    {
        evenscore.push(score[i])
    }
}
console.log(evenscore)

let newEvenscore = score.filter(newScore => newScore % 2 == 0)     // easyway of filtering the data by using filter method instead of loops
console.log(newEvenscore)


// create new array with even number score and then multiply the result with 3 and sum them

let mappedArray = newEvenscore.map(newScore => newScore*3)
console.log(mappedArray)
let sumofEvenArray = mappedArray.reduce((sum,total) => sum + total,0)
console.log(sumofEvenArray)

// easy way with chaining all three

var ATAR = [78,63,72,90,95,87,86]
let totalValue = ATAR.filter(newScore => newScore % 2 == 0).map(newScore => newScore*3).reduce((sum,total) => sum + total,0)
console.log(totalValue)

let fruits = ["pineapple","apple","kiwi", "banana", "orange"]
console.log(fruits.sort())
console.log(fruits.reverse())               // will reverse the order

let numbers = [23,9,8,34,29,11]
console.log(numbers.sort((a,b) => a-b))    // arrange in asscending order
console.log(numbers.sort((a,b) => b-a))    // arrange in descending order
