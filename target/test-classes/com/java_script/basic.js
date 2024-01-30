console.log("Hello Universe")

let a = 5
console.log(a)
console.log(typeof(a))

let b = 6
console.log(typeof(b))

let c = "Meenakshi Pal"
console.log(typeof(c))

let required = true
console.log(typeof(required))

// let c = a+b //  it did not work because we can not redeclare variable with let keyword 
// we cannot reassign the const keyword 
c = a + b  // reassigning is allowed with let
console.log(c)

// var c = a + b  redeclareing variable only possible with var keyword

console.log(!required)