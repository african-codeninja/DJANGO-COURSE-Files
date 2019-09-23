var temp = 60
var hot = false

if (temp>80){
  console.log("Hot Outside!");
}
else if (temp <= 80 && temp >= 50) {
  console.log("Average temp out Outside")
}
else if (temp <= 50 && temp >= 32) {
  console.log("It's pretty cold out")
}
else {
  console.log("It is very cold out")
}
