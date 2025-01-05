// trim method 
let myname = "  sahith " // it removes the spaces 
// console.log (myname.trim())

// upperCase method

let firstname = "sahith"
// console.log(firstname.toUpperCase())   // it converts the letter into capital letters


// lowerCase method

let lastName = "REDDY"
// console.log(lastName.toLowerCase()) // it convets the letters into small letters

// method argument

let str = "sahith"
// console.log(str.indexOf("h")) // returns the first index of occurrence of some values in string. Or give -1 if it is not found.
// console.log(str.indexOf("s"))
// console.log(str.indexOf("r"))

// method chaining
let str1 = "  Monkey  "
let newStr = str1.trim()

// console.log(newStr.toUpperCase())
// console.log(newStr.toLowerCase())

// slice method
let Name = "  sahith"
// console.log(Name.trim().slice(0,4).toUpperCase())


let str2 = "firelord"
// console.log(str2.slice(4))
// console.log(str2.slice(4,str2.length))

let method = "sahithreddy"
// console.log(method.slice(-2)) // it count from reverse as -1,-2


// replace method 
let str3 = "lovecoding"
// console.log(str3.replace("love","do")) // it changes for temp 
// console.log(str3)

let you = "hi hello hello"
// console.log(you.replace("hello","there")) // it replace only first occurance 


// repeat method
let me = "hi"
console.log(me.repeat("3"))
