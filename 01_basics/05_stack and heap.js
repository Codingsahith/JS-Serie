// stack(primitive) and heap(non-primitive)

// stack 

let myName = "sahith"
let anotherName = myName
anotherName = "chintu"

console.log(myName);
console.log(anotherName);

// heap

let userOne = {
    email:"msahith@gmail.com",
    upi:"sahith@ybl"
}

let userTwo = userOne
userTwo.email="sahith@gmail.com"
console.log(userTwo.email);

