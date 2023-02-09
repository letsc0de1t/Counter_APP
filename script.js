var value  = document.getElementById("value");
var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");

let counter=0;

const increaseValue = () =>{
   counter++;
   value.innerText = counter;
}

const decreaseValue = () =>{
    counter--;
    value.innerText = counter;
 }

const resetValue = () =>{
    counter=0;
    value.innerText = counter;
 }

 