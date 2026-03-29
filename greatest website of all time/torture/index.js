//window.alert(`I like pizza`); =>alert
// console.log(`wolf`); => basically print("wolf") but for web dev

// This is a comment.

/*
why
do
i
need
to
learn
about
comments?
*/

document.getElementById("myH2").textContent = `This was a lot of torture. I love and hate JS at the same time.`;
document.getElementById("myP").textContent = `The quick brown fox jumps over the lazy dog.`;

let x;
x = 100;
let y = 35;
console.log("100 + 35 = ", x+y); //experiment about arithmetic operations gone right



console.log(`I already know that 100 + 35 = ${x+y}`);
//console.log( typeof firstName) this is to see the type of variable. firstName is a string.

let firstName = `Anshul`
let online;
online = true
let isStudentinMIT = false;                                         //booleans like these are NO fun.
console.log(`My name is ${firstName}`)
console.log(`Are you online: ${online}. I don't really think you needed me to remind you that you are online.`)
console.log(`Am I a student in Massachusetts Institute of Technology: ${isStudentinMIT}`)

let GPA = 0.0000423
document.getElementById("myBtn").addEventListener("click", () => {
    alert(`Not happening buddy, your GPA is ${GPA}`);
});

let iq = 35342332;
iq += 1;
console.log(`My IQ is: ${iq}. No it's not. I lied.`)

// time for math lesson. +, -, *, /, do exactly what they are. ** = ^. eg. 2 ** 2 = 4. or, 2 ** 3 = 8. the number after ** is the exponent.
// 30 % 2 = 0. because % = remainder in division. like 31 % 2 would be 1.
// x =+ 1; = 70 if x = 69. other operations to skip writing variadbles twice = -=, *=, /=, **=, %=, ++, --

console.log(`here is some math homework for you. what is 44-33^5 divided by 2?`)
let result = 44 - 33 ** 5 / 2
console.log(`the answer is ${result}`) 

let nickname;
nickname = window.prompt(`What should I call You?`)
document.getElementById("myH1").textContent = `Hello ${nickname}!`

/* professional way for input. prolly never gonna use it.
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}

how to convert data types in use inputs. never gonna use it. prolly for math. age = Number(age); if age is an input
*/
document.getElementById("myBtn1").addEventListener("click", () => {
    alert(`Not that bad! But there is always some room for improvement.`);});

    const PI = 3.14159265358979323846;
    let radius;
    let circumference;
    document.getElementById("calcBtn").addEventListener("click", () => {
    let radius = Number(document.getElementById("radiusInput").value);

    let circumference = 2 * Math.PI * radius;

    document.getElementById("result").textContent =
        `The circumference is ${circumference}`;
});

// COUNTER PROGRAM
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

  // CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}