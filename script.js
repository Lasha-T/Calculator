calculation_done = false;
dot_used_in_number = false;
function appendToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;
    //if display is empty or last symbol and new entered value are digits
    if (currentValue.length === 0 || (/\d/.test(currentValue[currentValue.length - 1]) && /\d/.test(value))) {
        if(calculation_done){ //if after calculation not used operator and entered digit, last result is cleared
          clearDisplay();
        }
        display.value += value;
        console.log("case 1");
    // if last symbol and new entered value are not digits
  } else if (!/\d/.test(currentValue[currentValue.length - 1]) && !/\d/.test(value) && value !== ".") {
          display.value = currentValue.slice(0, -1) + value;
          console.log("case 2");
    } else {
        if(value == "."){
          if(calculation_done){
            clearDisplay();
          }
          //dot can't be used after operator
          if(!dot_used_in_number && /\d/.test(currentValue[currentValue.length - 1])){
            display.value += value;
            dot_used_in_number = true;
            console.log("case 3");
          }
        } else if (!/\d/.test(value)) { //if new entered value is not digit and not ".", so it is operator
          display.value += value;
          dot_used_in_number = false;
          console.log("case 4");
        } else {
          display.value += value;
          console.log("case 5");
        }
    }
    calculation_done = false;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        result2 = Math.round(parseFloat(result) * 1000000000) / 1000000000;
        document.getElementById('display').value = result2;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
    calculation_done = true;
}
