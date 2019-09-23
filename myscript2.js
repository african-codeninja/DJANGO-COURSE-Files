var bmw =100
var mercedes = 100
var audi = 100

var report = "No sales"

if (bmw >= 100 && mercedes >=100 && audi >=100) {
  report = "Strong sales of both BMW, Mercedes and Audi!"
}
else if (bmw === 0 && mercedes === 0 && audi === 0) {
  report = "No cars were bought"
}
else {
  report = "We had some sales form all Car"
}

console.log(report);
