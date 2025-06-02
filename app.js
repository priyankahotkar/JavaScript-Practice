// console.log("Hello World");
// console.log("Apna College");
// let a = 10;
// let b = 5;
// console.log("sum is : ", a+b);

// let pencilPrice = 10;
// let eraserPrice = 5;
// console.log("The total price is ", pencilPrice + eraserPrice, " Rupees. ");
// let output = "The total price is "+ (pencilPrice + eraserPrice) +" Rupees. "
// let output = `The total price is : ${pencilPrice + eraserPrice} Rupees. `;
// console.log(output);
// alert("this is a simple alert");
// console.log("This is a simple log");
// // console.error("This is an error msg");
// console.warn("This ia a warning");
// le9t firstName = prompt("Enter your name : ");
// console.log(firstName);

// let firstName = prompt("Enter your first name : ");
// let lastName = prompt("Enter your last name : ");
// let msg = `Welcome ${firstName} ${lastName}`;
// alert(msg);

// let msg = "     Hello       ";
// let pwd = prompt("Set your password");
// alert(pwd.trim());

const student = {           // reference of object cannot be changed but values can be changed
    name : "Shraddha",
    age : 23,
    marks : 94.4,
    city : "Delhi"
};

let student2 = ["Shraddha", 23, 94.4];

const item = {
    price : 100.99,
    discount : 50,
    colors : ["red", "pink"]
};

const post = {
    username : "@shraddhakhapra",
    content : "This is my #first post",
    likes : 150,
    reposts : 5,
    tags : ["@apnacollege", "@delta"]
};
// console.log(post["content"]);
// console.log(post.content);

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
}

// const classInfo = {
//     aman : {
//         grade : "A+",
//         city : "Delhi"
//     },
//     shraddha : {
//         grade : "A",
//         city : "Pune"
//     },
//     karan : {
//         grade : "O",
//         city : "Mumbai"
//     }
// };

// const classInfo = [
//     {
//         name : "Aman",
//         grade : "A+",
//         city : "Delhi"
//     },
//     {
//         name : "Shraddha",
//         grade : "A",
//         city : "Pune"
//     },
//     {
//         name : "Karan",
//         grade : "O",
//         city : "Mumbai"
//     }
// ];

let end = prompt("Enter a range end : ");
let num = Math.floor(Math.random()*end) + 1;
let guess = prompt("Guess a number between 1 and "+end);
while (true) {
    if(guess == "quit") {
        console.log("You quit!");
        break;
    }
    else if (guess == num) {
        console.log("You guessed it!");
        break;
    } else if(guess > num) {
        guess = prompt("Hint : Too high! Try again : ");
    } else {
        guess = prompt("Hint : Too low! Try again : ");
    }
}

