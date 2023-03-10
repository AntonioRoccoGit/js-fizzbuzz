// variabili di appoggio
let divisionFact;
let boxClass;
// variabili DOM
const rowElement = document.querySelector(".row");

for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        divisionFact = "FizzBuzz";
        boxClass = " fizz-buzz";
    } else if (i % 5 === 0) {
        divisionFact = "Buzz";
        boxClass = " buzz";

    } else if (i % 3 === 0) {
        divisionFact = "Fizz";
        boxClass = " fizz";
    }else{
        divisionFact = `${i}`;
        boxClass = "";
    }
    console.log(i, divisionFact, boxClass);
    rowElement.innerHTML += `<div class="col${boxClass}"><span >${divisionFact}</span></div>`;
}
