// stack(primitive) and heap(non-primitive)

// stack 

let myName = "sahith"
let anotherName = myName
anotherName = "chintu"

console.log(myName);
console.log(anotherName); 
// output : myName- sahith
// output : anotherName- chintu .it will not changes the original value

// heap

let userOne = {
    email:"msahith@gmail.com",
    upi:"sahith@ybl"
}

let userTwo = userOne
userTwo.email="sahith@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

// output : userOne.email - sahith@gmail.com
// output : userTwo.email - sahith@gmail.com . it changes the original value