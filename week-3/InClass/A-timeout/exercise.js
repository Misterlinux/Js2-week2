/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const body = document.querySelector('body')
let extra = document.createElement("h2")
extra.innerText = "indeed"

/*
setTimeout( () => {
    body.style.backgroundColor = 'cyan',
    body.appendChild(extra)
    }, 5000 
)
*/
//ex 2

const changeColorInterval = setInterval(() => {
    const numeroAleatorio = Math.random() > .5
    body.style.backgroundColor = numeroAleatorio ? 'cyan' : 'blue'
    body.appendChild(extra)
}, 2000)
console.log(changeColorInterval)
