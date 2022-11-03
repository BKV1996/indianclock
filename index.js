// 1. Ways to print in JavaScript
// alert("Hello World");
// document.write("This is a document");

// 2. JavaSript Console API
/* console.log("Hello World", 4 + 6, "Another Log");
console.warn("This is warning");
console.error("This is an error");
*/

//3. Java Sript Variables
// Variable is container used to store data values
var num1 = 35;
var num2 = 56;
// console.log(num1 + num2);

// 4. Object

var marks = {
    Sonu:56,
    Vivek:56,
    Ravi:87
}
//console.log(marks);

// Array

var arr = [1, 2, "Brijesh", 3, 4]
// console.log(arr);

// -------> For loop
var arr = [1, 2, 3, 4, 5, 6, 7];
for(var i=0; i<arr.length; i++){
    if(i ==2){
 //       break;
          continue;
    }
//    console.log(arr[i]);
}

// -------------> For Each loop
arr.forEach(function(element){
//    console.log(element);
});

// ---------> Constant is used where we don't want to change the value
/*
const a = 0;
a++;
console.log(a);
*/

// -------> While Loop
/*
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}
*/

// -------> do while loop
let j = 0;
do{
//    console.log(arr[j]);
    j++;
}while(j<arr.length);

// -------> Array Method
let myArr = ['Fan', 'Camera', 34, null, true];
// myArr.pop();
// myArr.push('Brijesh');
// myArr.shift();
// myArr.unshift('Brijesh');
myArr.sort();
// console.log(myArr);

// ------------> String Method
let myLovelyString = 'Harry is a good good';
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf('good'));
// console.log(myLovelyString.lastIndexOf('good'));
// console.log(myLovelyString.slice(0, 3));
// console.log(myLovelyString.replace('Harry', 'Brijesh'));
d = myLovelyString.replace('Harry', 'Brijesh');
d = d.replace('Harry', 'Brijesh');
// console.log(d, myLovelyString);


// DOM Manipulation
/*
let elem = document.getElementById('Click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = 'yellow';
elemClass[0].classList.add('bg-primary');
// console.log(elem.innerHTML);
tn = document.getElementsByTagName('button');
// console.log(tn);
tn1 = document.getElementsByTagName('div');
console.log(tn1);

createdElement1 = document.createElement('p');
createdElement1.innerText = 'This is a para';
tn1[0].appendChild(createdElement1);
createdElement2 = document.createElement('b');
createdElement2.innerText = 'This is a bold';
tn1[0].replaceChild(createdElement2, createdElement1);
*/

// JavaScript Events

function Clicked(){
    console.log('The button was clicked')
}


/*
window.onload = function(){
    console.log("The button was loaded");
}
*/
/*
firstContainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].inmerHTML = "<b>This is another selector used in the container</b>"
    console.log('Clck hua')
})
*/

/*
firstContainer.addEventListener('mouseover', function(){
    console.log('Clck hua mouse')
})

firstContainer.addEventListener('mouseout', function(){
    console.log('Mouse out container')
})

*/

/*
firstContainer.addEventListener('mouseup', function(){
    console.log('Mouse up when clicked on the container')
})

firstContainer.addEventListener('mousedown', function(){
    console.log('Mouse down when clicked on the container')
})
*/

// Arrow function
/*
function sum(a,b){
    return a+b;
}
*/

// or
/*
sum = (a,b)=>{
    return a+b;
}
*/

// Set Timeout
/*
logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set Interval fired </b>"
    console.log("I am your dog");
}
//set timeout
setTimeout(logkaro, 2000);
clr = setTimeout(logkaro, 2000);
clr = setInterval(logkaro,2000);
// Use clearInterval(clr)/ clearTimeout(clr) to cancel set Interval/ Set time out
*/

// JSON
obj = {name: "Brijesh", length:1, a:{this: "Harry"}}
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse(`{"name":"Brijesh","length":1,"a":{"this":"Harry"}}`)
console.log(parsed);

