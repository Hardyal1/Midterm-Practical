let countdown = 5;
let count = 1;

let people = [
    {
        name: "Harry",
        age: 25,
    },
    {
        name: "Larry",
        age: 15,
    },
    {
        name: "Bert",
        age: 45,
    },
    {
        name: "Jerry",
        age: 35,
    },
    {
        name: "Berry",
        age: 5,
    },
    {
        name: "Bart",
        age: 55,
    }
]
function myFunction(ele) {
    let x = ele.id;
    if (x === '1') {
        countdown = countdown + count;
    }
    document.getElementById("NumCount").innerHTML = "Counter : " + countdown;
}
    let list = '';
    people.forEach(game);
    document.getElementById('object-list').innerHTML = list;
function game(item) {
    if (item['age'] >= 25) {
        list += '<div style="color:green;">';
    } else {
        list += '<div>';
    }
        list += '<h1>Name: ' + item['name'] + '</h1>' + '<h2>Age: ' + item['age'] + '</h2>' + '</div>';
    }