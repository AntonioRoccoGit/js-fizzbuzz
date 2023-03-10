let divisionFact = "";

for (i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        divisionFact = "FizzBuzz";
    } else if (i % 5 == 0) {
        divisionFact = "Buzz";
    } else if (i % 3 == 0) {
        divisionFact = "Fizz";
    }else{
        divisionFact = "";
    }
    console.log(i, divisionFact);

}
