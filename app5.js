// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000);
// });
// });


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

function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("success: data was saved");
        } else {
            reject("failure: weak connection");
        }
    });
}

saveToDb("apna college").then((result) => {
    console.log("promise was resolved");
    console.log(result);
    return saveToDb("hello world");
})
.then((result) => {
    console.log("promise was resolved 2");
    console.log(result);
    return saveToDb("hello world 2");
})
.then((result) => {
    console.log("promise was resolved 3");
    console.log(result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log(error);
});