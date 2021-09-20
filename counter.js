const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const text = document.querySelector("#counter");
let counter = 1;
let output = "";

incrementBtn.onclick = (e) => {
    if (counter < 100) {
        text.value = fizzBuzz(++counter);
    } else {
        alert("Number can not go above 100")
    } 
}

decrementBtn.onclick = (e) => {
    if (counter > 0) {
        text.value = fizzBuzz(--counter);
    } else {
        alert("Number can not go below zero");
    }  
}

function fizzBuzz(num){
    if (num % 15 === 0) {
        output = 'FizzBuzz';
    } else if (num % 5 === 0) {
        output = 'Buzz';
    } else if (num % 3 === 0) {
        output = 'Fizz';
    } else {
        output = num;
    }
    return output;
}

