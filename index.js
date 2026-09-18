/*

// ==================== Console & Alert ====================

console.log("hello consol");

window.alert("this is an alert");
window.alert("this is an another alert");


// ==================== Comments ====================

// comment


// ==================== HTML DOM ====================

document.getElementById("myH1").textContent = "hello from js file";


// ==================== Variables ====================

let x;
x = 100;

let name = "mohammadJavad";

console.log("x = ${x}");
console.log(`x = ${x}`);


// ==================== typeof ====================

console.log(typeof x);
console.log(`name = ${typeof name}`);

let online = true;


// ==================== User Input ====================

let username;

username = window.prompt("What is your username?");


// ==================== Input + Button ====================

let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("username").value;
    document.getElementById("myH1").textContent = `Welcome ${username}`;
}


// ==================== Number Conversion ====================

let age = window.prompt("How old are you");

age = Number(age);

age += 1;

console.log(age);


// ==================== Type Conversion ====================

let x = "0";
let y = 0;
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// =================== Const ==================

const PI = 3.14;
let radius;
let circle;
document.getElementById("submit-button").onclick = function(){;
    radius = document.getElementById("radios").value;
    radius = Number(radius);
    circle = 2 * PI * radius;
    document.getElementById("radios-printer").textContent = circle;
}



// ================= counter =================

const decreaseBtn = document.getElementById("db");
const resetBtn = document.getElementById("rb");
const increaseBtn = document.getElementById("ib");
const labelCounter = document.getElementById("c");
let counter = 0;

decreaseBtn.onclick = function(){
    counter--;
    labelCounter.textContent = `count = ${counter}`;
}
increaseBtn.onclick = function(){
    counter++;
    labelCounter.textContent = `count = ${counter}`;
}
resetBtn.onclick = function(){
    counter = 0;
    labelCounter.textContent = `count = ${counter}`;
}

*/

// ===================== Math =====================

let x = 2.1;
let y = 2.9;
let z;

console.log(Math.round(x))
console.log(Math.floor(y)) // always round down
console.log(Math.ceil(x)) // always round up