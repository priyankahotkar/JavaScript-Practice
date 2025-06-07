// let jsonRes = '{"fact":"Unlike humans, cats cannot detect sweetness which likely explains why they are not drawn to it at all.","length":102}';

// console.log(jsonRes);

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);

// let student = {
//     name: "John Doe",
//     age: 20,
//     course: "Computer Science"
// }

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

// fetch(url)
//     .then((response) => {
//         // console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data.fact);
//         return fetch(url);
//     })
//     .then((response) => {
//         return response.json();
//     })
//     .then((data2) => {
//         console.log(data2.fact);
//     })
//     .catch((error) => {
//         console.log("ERROR - ", error);
//     });

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch(e) {
//         console.log("ERROR - ", e);
//     }
// }

async function getFacts() {
    try {
        let res = await axios.get(url2);
        // console.log(res.data.fact);
        return res.data.message;
    } catch(e) {
        console.log("ERROR - ", e);
        return "No image found";
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    // let p = document.getElementById("fact");
    // p.innerText = await getFacts();
    let img = document.querySelector("img");
    let link = await getFacts();
    // img.src = link;
    img.setAttribute("src", link);
});



