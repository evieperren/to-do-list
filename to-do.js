let inputField = document.getElementById('input-field');
let add = document.getElementById('add');

// get add button to display input into dom
add.addEventListener('click', function (e) {
    e.preventDefault();
    let listItem = document.getElementById('list').innerHTML = `<ul><li id="new-item">${inputField.value}</li></ul>`;
    return listItem;
});
// save input and concatinate new 
document.getElementById('new-item').addEventListener('click', function (){
    document.getElementById('new-item').clear();
})

// delete input 


