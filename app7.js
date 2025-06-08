// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = { headers: {Accept : "application/json"} };
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch(err) {
//         console.log("error: ",err);
//     }
// }

let url2 = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colleges = await getColleges(country);
    let ul = document.querySelector("ul");
    ul.innerHTML = "";
    for(college of colleges) {
        let li = document.createElement("li");
        li.innerText = college.name;
        ul.appendChild(li);
    }
});

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    } catch(e) {
        console.log("error: ",e);
        return [];
    }
}