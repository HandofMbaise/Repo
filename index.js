const displayHead = document.getElementById("display-head");
const displayButton = document.getElementById('display-button')

 function heroku(){
    fetch('https://myfourth-heroku-app-c6c3fd288ce3.herokuapp.com/server', {
        method: 'GET',
        headers: {
           'content-Type': 'application/json'
        },
    }).then(response => response.text())
    .then(data => displayHead.textContent = data)
    .catch(error => console.log(error));
}

displayButton.addEventListener('click', heroku);





//  REFRENCE.

//  displayButton.addEventListener('click' ,() => {
//     fetch('https://myfourth-heroku-app-c6c3fd288ce3.herokuapp.com/server', {
//         method: 'GET',
//         headers: {
//            'content-Type': 'application/json'
//         },
//     }).then(response => response.text())
//     .then(data => displayHead.textContent = data)
//     .catch(error => console.log(error));
//  });


//  displayButton.onclick = function(){

//     fetch('https://myfourth-heroku-app-c6c3fd288ce3.herokuapp.com/server', {
//         method: 'GET',
//         headers: {
//            'content-Type': 'application/json'
//         },
//     }).then(response => response.text())
//     .then(data => displayHead.textContent = data)
//     .catch(error => console.log(error));
// }

// function heroku(){
//     fetch('https://myfourth-heroku-app-c6c3fd288ce3.herokuapp.com/server', {
//         method: 'GET',
//         headers: {
//            'content-Type': 'application/json'
//         },
//     }).then(response => response.text())
//     .then(data => displayHead.textContent = data)
//     .catch(error => console.log(error));
// }

// displayButton.addEventListener('click', heroku);

