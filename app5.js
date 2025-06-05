h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3) {
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log("color changed to ", color);
            resolve("color changed! ");
        }, delay);
    });
}

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000);
//         });
// });
// });

// changeColor("red", 1000)
//     .then((result) => {
//         console.log("red color was completed");
//         return changeColor("orange", 1000);
//     })
//     .then((result) => {
//         console.log("orange color was completed");
//         return changeColor("green", 1000);
//     })
//     .then((result) => {
//         console.log("green color was completed");
//         return changeColor("blue", 1000);
//     })
//     .then((result) => {
//         console.log("blue color was completed");
//     })
//     .catch((error) => {
//         console.error("An error occurred:", error);
//     });

// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb("apna college", () => {
//     console.log("success: your data was saved");
//     saveToDb("hello world", () => {
//         console.log("success2");
//         saveToDb("hello world2", () => {
//             console.log("success3");
//             }, () => {
//             console.log("failure3");
//         });
//     }, () => {
//         console.log("failure2");
//     })
// }, () => {
//     console.log("failure: weak connection. your data was not saved");
// });

// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             resolve("success: data was saved");
//         } else {
//             reject("failure: weak connection");
//         }
//     });
// }

// saveToDb("apna college").then((result) => {
//     console.log("promise was resolved");
//     console.log(result);
//     return saveToDb("hello world");
// })
// .then((result) => {
//     console.log("promise was resolved 2");
//     console.log(result);
//     return saveToDb("hello world 2");
// })
// .then((result) => {
//     console.log("promise was resolved 3");
//     console.log(result);
// })
// .catch((error) => {
//     console.log("promise was rejected");
//     console.log(error);
// });

// async function greet() {
//     throw "some random error";
//     return "hello!";
// }

// greet()
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log("result was: ", result)
//     })
//     .catch((error) => {
//         console.log("promise was rejected with error ", error);
//     });

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     getNum();
// }

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
    } catch(error) {
        console.log("error caught", error);
    }

    let a = 5;
    console.log(a);
    console.log("new number = ", a+3);
}