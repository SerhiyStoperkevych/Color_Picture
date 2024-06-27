const white = document.getElementById('white');
const black = document.getElementById('black');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const pink = document.getElementById('pink');

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const color = document.getElementById('color');

function cat(element, joj) {
    color.style.backgroundColor = element;
    color.style.color = joj;
};

white.addEventListener('click', () => cat("white", "black"));

black.addEventListener('click', () => cat("black", "white"));

green.addEventListener('click', () => cat("green", "black"));

blue.addEventListener('click', () => cat("blue", "black"));

red.addEventListener('click', () => cat("red", "black"));

yellow.addEventListener('click', () => cat("yellow", "black"));

pink.addEventListener('click', () => cat("pink", "black"));


function makeColor(element) {

    if (color.style.backgroundColor === "pink") {
        element.style.backgroundColor = 'pink'

    } else if(color.style.backgroundColor === "yellow") {
        element.style.backgroundColor = 'yellow'

    } else if(color.style.backgroundColor === "red") {
        element.style.backgroundColor = 'red'

    } else if(color.style.backgroundColor === "blue") {
        element.style.backgroundColor = 'blue'

    } else if(color.style.backgroundColor === "white") {
        element.style.backgroundColor = 'white'

    } else if(color.style.backgroundColor === "green") {
        element.style.backgroundColor = 'green'

    }  else {
        element.style.backgroundColor = 'black'

    }
};

first.addEventListener('click', () => makeColor(first) );

second.addEventListener('click', () => makeColor(second) );

third.addEventListener('click', () => makeColor(third) );
