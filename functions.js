//Global scope
var v = " GLOBAL V"
var stuff = " GLOBAL STUFF"

function fun(stuff) {
  console.log(v);
  stuff = "Reassign stuff inside fun"
  console.log(stuff);
}

fun()
//Calls stuff as a Global function even though it is defined locally as a reassignment
console.log(stuff);
/*
//NOTE: that the variable result scope is only linited to the function timesFive
function timesFive(numInput) {
  //local scope
  var result = numInput * 5;
  return result;
}

//return values, making it possible to assign
//done to save the of function and output it you use a return, return allows a function to save a value in the system

function formal(name="Sam",title="Sir") {
  return title + " "+name;
}


/*function accepting a defual parameter "Frank" if you call the function and don't supply a parameter
function helloSomeone(name="Frank") {
  console.log("Hello "+name);
}


function accepting two parameters
function addNum(num1,num2){
  console.log(num1+num2);
}


:-helloYou function accepting and argument or parameter
function helloYou(name) {
  console.log("Hello "+name);
}


:- first helloWorld output function
function hello() {
  console.log("hello World");
}*/
