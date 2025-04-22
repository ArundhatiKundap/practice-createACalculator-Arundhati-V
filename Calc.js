const readlineSync = require("readline-sync");

let menuOptions = {
    1: "Calculate Absolute",
    2: "Calculate Power",
    3: "Calculate Square Root",
    4: "Find Maximum and Minimum",
    5: "Give Random Number",
    6: "Give Round number",
    7: "Exit"
};


let choice;

do {
    
    for (let option in menuOptions) {
        console.log(`${option}. ${menuOptions[option]}`);
    }

    choice = Number(readlineSync.question("What is your choice "));
    console.log(choice);


    if (choice === 1) {

        let absNum = Number(readlineSync.question("Enter Number "));
        console.log("Absolute value:", calcAbsolute(absNum));

    } else if (choice === 2) {
        let base = Number(readlineSync.question("Enter base "));
        let exponent = Number(readlineSync.question("Enter exponent "));
        console.log("Power result:", calcPower(base, exponent));
    } else if (choice === 3) {
        let sqNum = Number(readlineSync.question("Enter a number: "));
        console.log("Square root:", calcSquareroot(sqNum));
    } else if (choice === 4) {
        let ArrayofNumbers = readlineSync.question("Enter numbers separated by spaces: ");
        findMaxMin(ArrayofNumbers)

    } else if (choice === 5) {
        console.log("Random number (0-1):", calcRandom());

    } else if (choice === 6) {
        let roundNum = Number(readlineSync.question("Enter a number: "));
        console.log("Rounded number:", calcRounding(roundNum));
    } else {
        console.log("Goodbye!");
    }
    


} while (choice !== 7);



function calcAbsolute(num) {
 
    return Math.abs(num);
}

function calcPower(base, exponent){
    return Math.pow(base, exponent);
}

function calcSquareroot(num) {
    return Math.sqrt(num);
}

function findMaxMin(ArrayofNumbers) {
    let numberArray = ArrayofNumbers
        .trim()
        .split(/\s+/)
        .map(Number)
        .filter(num => !isNaN(num));
    if (numberArray.length === 0) {
        console.log("No valid numbers entered.");
        return;
    }

    let max = Math.max(...numberArray);
    let min = Math.min(...numberArray);

    console.log("Numbers entered:", numberArray.join(", "));
    console.log("Maximum:", max);
    console.log("Minimum:", min);
}

function calcRandom() {
    return Math.random();
}

function calcRounding(num) {
    return Math.round(num);
}