let jsonRes = '{"fact":"Unlike humans, cats cannot detect sweetness which likely explains why they are not drawn to it at all.","length":102}';

console.log(jsonRes);

let validRes = JSON.parse(jsonRes);
console.log(validRes);

let student = {
    name: "John Doe",
    age: 20,
    course: "Computer Science"
}