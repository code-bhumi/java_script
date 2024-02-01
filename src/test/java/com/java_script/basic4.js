const greet = "evening"

if(1 == 1)
{
    let greet = "night"
}

function add(a,b)
{
    let greet = "morning"
    return a+b
}

let sum = add(2,3)
console.log(sum)

let sumofinteger = function(c,d)
{
    return c+d
}

let sumofnumbers = (c,d) => c+d

console.log(sumofnumbers(5,2))
console.log(greet)
