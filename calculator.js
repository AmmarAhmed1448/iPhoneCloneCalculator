const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button-item");
let screenValue = ""


const calculate = (btnVal) => {
    if (btnVal === "AC") {
        screenValue = ""
        display.value = screenValue;
    }
    else if (btnVal === "DEL") {
        screenValue = screenValue.slice(0, -1);
        display.value = screenValue;
    }
    else if (btnVal === "=") {
        if (screenValue === "") return;
        else {
            screenValue = eval(screenValue);
            display.value = screenValue;
        }
    }
    else {
        if ((btnVal === "+" || btnVal === "-" || btnVal === "x" || btnVal === "/" || btnVal === "%") && screenValue === "")
            return;
        else {
            if (btnVal === "x") {
                btnVal = "*";
            }

            if(btnVal === "%"){
                screenValue = eval(screenValue +"/100");
                btnVal = ""
        }
            screenValue += btnVal;
            display.value = screenValue
        }
    }



}

buttons.forEach(buttons => {
    buttons.addEventListener("click", e => {
        let buttonValue = e.target.innerText;


        calculate(buttonValue);
    });
});