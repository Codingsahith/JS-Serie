// Array methods 1.push 2.pop 3.unshift 4.shift

// push
let num = [1,2,3,4]
num.push(5)
// console.log(num) // it will push any num or str in the array

// pop
let num1 = [1,2,3,4]
num1.pop() 
// console.log(num1) // it will pop the only last value of array

// unshift 
let arr = [1,2,3,4]
arr.unshift(0) 
// console.log(arr) // it will add any num or str at starting in array

// shift
let arry = [1,2,3,4]
arry.shift()
// console.log(arry) // it will remove starting value in the array

// indexOf - returns index of something
let str = ["vinesh","sri","cherry"]
str.indexOf("cherry") 
// console.log(str) // it will give index of a value in array. if the value is not there in array it represents -1

// includes - search for a value 
let prim = ["vinesh","sri","cherry"]
prim.includes("sri")
// console.log(prim) // it's like boolean. if a value exist in a array it will give true.
// if a value is not exist in array it will give false.

// concat - combin 2 arrays 
let num2 = [1,2,4]
let num3 = [3,5,6]
// num2.concat(num3)- synatx
// console.log(num2.concat(num3))

// reverse
let list = [1,2,3,4]
list.reverse()
// console.log(list)

// slice - it copies a porti0n in array
let tv = [1,2,3,4,5,6]
// console.log(tv.slice())
// console.log(tv.slice(3,5))
// console.log(tv.slice(4))
// console.log(tv.slice(-4)) 

// splice - it changes in orginal array
// splice : remove , replace , add elements in place
let Num = [1,2,3,4,5]
// Num.splice(3) // eg- for remove 
// Num.splice(0,1,"sahith","chintu") // replaceing with index value  , eg for replace
// Num.splice(2,0,"reddy","name") // replceing in middle value
// it will not perform all he methods at once. if we perform all the methods at once it will not give coorectt answers.
// console.log(Num)

// nested array
let nested = [[1,2],[3,4],[5,6]]
// console.log(nested[0][0])
// console.log(nested[0],nested[1])
// console.log(nested[1][0])
// console.log(nested[1][1])
// console.log(nested[2][0])
// console.log(nested[2][1])