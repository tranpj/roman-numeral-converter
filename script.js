const numToConvert = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDisplay = document.getElementById("output");

//conversion table
const romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
const arabicNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

const convertNumToRomanNum = (num) => {
    let result = "";
    let curRomanNum = 0;
    let numToConvert = num;

    //loop though all roman numerals to convert the value
    while (numToConvert > 0 && curRomanNum < romanNum.length) {
        //if number is greater or equal to the current roman numeral
        if (numToConvert >= arabicNum[curRomanNum]) {
            result = result.concat(romanNum[curRomanNum]);
            numToConvert -= arabicNum[curRomanNum];
        }
        //otherwise move to next roman numeral
        else {
            curRomanNum++;
        }
    }

    return result;
}

const displayResult = (result) => {
    //Clear output
    outputDisplay.innerHTML = ""

    //Display result
    outputDisplay.innerHTML = `<p>${result}</p>`
}

const convertBtnPressed = () => {
    //Check if value is empty or not a number
    if (!numToConvert.value || isNaN(numToConvert.value)) {
        displayResult("Please enter a valid number");
    }
    //Check if value is less than 1
    else if (numToConvert.value < 1) {
        displayResult("Please enter a number greater than or equal to 1");
    }
    //Check value not greater than or equal to 4000
    else if (numToConvert.value > 3999) {
        displayResult("Please enter a number less than or equal to 3999");
    }
    //Otherwise value is valid so we convert it
    else {
        displayResult(convertNumToRomanNum(numToConvert.value));
    }
}

const keyPress = (key) => {
    if (key.key == "Enter") {
        convertBtnPressed();
    }
}

convertBtn.addEventListener("click", convertBtnPressed);
numToConvert.addEventListener("keypress", keyPress);