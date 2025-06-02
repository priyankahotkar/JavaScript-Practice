let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click', function() {
    let li = document.createElement('li');
    li.innerText = inp.value;
    let dltBtn = document.createElement('button');
    dltBtn.innerText = 'delete';
    dltBtn.className = 'delete';
    li.appendChild(dltBtn);
    ul.appendChild(li);
    inp.value = '';
});

ul.addEventListener("click", function(event) {
    if(event.target.className === 'delete') {
        let item = event.target.parentElement;
        ul.removeChild(item);
    }
})

// let dlts = document.querySelectorAll('.delete');
// for (let dlt of dlts) {
//     dlt.addEventListener('click', function() {
//         let item = dlt.parentElement;
//         if (item) {
//             ul.removeChild(item);
//         } else {
//             alert('No items to delete');
//         }
//     });
// }
