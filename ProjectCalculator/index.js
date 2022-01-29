const sum = (num, num2) => num + num2;

const sub = (num, num2) => num - num2;

const multiply = (num, num2) => num * num2;

const divide = (num, num2) => num / num2;

const operate = (operator, num, num2) => {
    if (operator === sum) {
        return sum(num, num2)
    } else if( operator === sub) {
        return sub(num ,num2)
    } else if( operator === multiply) {
        return multiply(num, num2)
    } else if(operator === divide) {
        return divide(num, num2)
    } else {
        return
    }
}
let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", () => {
    let newValue = input.value += "1";
    input.value =  newValue 
});
buttons[1].addEventListener("click", () => {
    let newValue = input.value += "2";
    input.value =  newValue 
});
buttons[2].addEventListener("click", () => {
    let newValue = input.value += "3";
    input.value =  newValue 
});
buttons[5].addEventListener("click", () => {
    let newValue = input.value += "4";
    input.value =  newValue 
});
buttons[6].addEventListener("click", () => {
    let newValue = input.value += "5";
    input.value =  newValue 
});
buttons[7].addEventListener("click", () => {
    let newValue = input.value += "6";
    input.value =  newValue 
});
buttons[10].addEventListener("click", () => {
    let newValue = input.value += "7";
    input.value =  newValue 
});
buttons[11].addEventListener("click", () => {
    let newValue = input.value += "8";
    input.value =  newValue 
});
buttons[12].addEventListener("click", () => {
    let newValue = input.value += "9";
    input.value =  newValue 
});
buttons[15].addEventListener("click", () => {
    let newValue = input.value += "0";
    input.value =  newValue 
});
buttons[4].addEventListener("click", () => {
    input.value = "";
    newArray = [];
})
let newArray = [];
// let arrayNum = newArray[3].toFixed(2);

buttons[3].addEventListener("click", () => {
    newArray[0] = sum;
    if ( typeof newArray[3] === "number" && typeof newArray[1] === "number" && newArray[3] === newArray[1]) {
        newArray[2] = input.valueAsNumber
        let result = operate(newArray[0], newArray[1], newArray[2])
        newArray[3] = result
        input.value = newArray[3];
        return
    }
    if (newArray[3] > newArray[1] || newArray[3] < newArray[1]) {
        input.value = ''
        newArray[1] = newArray[3]
        return
    }
    if (typeof newArray[1] === "number") {
        newArray[2] = input.valueAsNumber
        let result = operate(newArray[0], newArray[1], newArray[2])
        newArray[3] = result;
        input.value = newArray[3];
        return
    }
    newArray[1] = input.valueAsNumber;
    input.value = '';
})

buttons[8].addEventListener("click", () => {
    newArray[0] = sub;
    if ( typeof newArray[3] === "number" && typeof newArray[1] === "number" && newArray[3] === newArray[1]) {
        newArray[2] = input.valueAsNumber
        let result = operate(newArray[0], newArray[1], newArray[2])
        newArray[3] = result
        input.value = newArray[3];
        return
    }
    if (newArray[3] < newArray[1] || newArray[3] > newArray[1]) {
        input.value = ''
        newArray[1] = newArray[3]
        return
    }
    if (typeof newArray[1] === "number") {
        newArray[2] = input.valueAsNumber
        let result = operate(newArray[0], newArray[1], newArray[2])
        newArray[3] = result;
        input.value = newArray[3];
        return
    }
    newArray[1] = input.valueAsNumber;
    input.value = '';
    
})
buttons[9].addEventListener("click", () => {
    newArray[0] = divide;
    if ( typeof newArray[3] === "number" && typeof newArray[1] === "number" && newArray[3] === newArray[1]) {
        newArray[2] = input.valueAsNumber
        let result = operate(newArray[0], newArray[1], newArray[2])
        newArray[3] = result
        input.value = newArray[3];
        return
    }
    if (newArray[3] < newArray[1] || newArray[3] > newArray[1]) {
        input.value = ''
        newArray[1] = newArray[3]
        return
    }
    if (typeof newArray[1] === "number") {
        newArray[2] = input.valueAsNumber
        let result = operate(newArray[0], newArray[1], newArray[2])
        newArray[3] = result;
        input.value = newArray[3];
        return
    }
    newArray[1] = input.valueAsNumber;
    input.value = '';
})
buttons[13].addEventListener("click", () => {
    newArray[0] = multiply;
    newArray[1] = input.valueAsNumber;
    input.value = '';
})
buttons[14].addEventListener("click", () => {
    if (newArray[3] > newArray[1] || newArray[1] > newArray[3]) {
        newArray[1] = newArray[3]
        let result = operate(newArray[0], newArray[1], newArray[2])
        newArray[3] = result;
        input.value = newArray[3]
        return
    }
    newArray[2] = input.valueAsNumber
    let result = operate(newArray[0], newArray[1], newArray[2])
    newArray[3] = result;
    input.value = newArray[3];

    
})



