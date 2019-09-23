//Collecting information through prompts and displaying a final alert message
var firstName = prompt("PLease Enter your First Name Please: ")
var lastName = prompt("PLease Enter your Last Name please: ")
var age = prompt("How old are you? ")
var height = prompt("What is your height? ")
var petName = prompt("Please enter you pets name? ")
alert("Thhank you so much for the information you have provided")

//Four conditions Im checking
var comrade = null;
var ageCondition = null;
var heightCondition = null;
var petCondition = null;

//name conditions
if (firstName[0] === lastName[0]) {
  comrade = true;
}else {
  comrade = false;
}

//age conditions
if (age > 30 && age < 40) {
  ageCondition = true;
}else {
  ageCondition = false;
}

//height condition
if (height >= 170) {
  heightCondition = true;
}else {
  heightCondition = false;
}

//Pet condition
if (petName[petName.length-1] === "y"){
  petCondition = true;
}else {
  petCondition = false;
}

//Check Conditions

if (comrade && ageCondition && heightCondition && petCondition) {
  console.log("Welcome SPY!!! to the Lair");
}else {
  console.log("Get the hell outta here");
}
