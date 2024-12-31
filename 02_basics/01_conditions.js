// condtional staements are if , else-if , else , Nested-if...

// if statement
let myAge = 22

if(myAge>=18){
    // console.log("Your age is",myAge,"and you can vote now")
}

// else-if statement
let MyAge = 15

if (MyAge >=18){
    // console.log("Your age is",MyAge,"and you can vote now")
}else{
    // console.log("Your age is",MyAge,"and you can not vote now")
}

// Else-if statement

let mycolor = "blue"

if (mycolor == "red"){
    // console.log("my fav color is red")
}else if (mycolor == "orange"){
    // console.log("my fav color is orange")
}else if (mycolor == "blue"){
    // console.log("my fav color is 'Blue'")
}

// nested-if statement 

let marks = 99;

if (marks >= 32){
    console.log("Pass");
    if(marks >= 80){
        console.log("'O' Grade");
    }else{
        console.log("'A' Grade");
    }
}else{
    console.log("Better luck next time");
}
