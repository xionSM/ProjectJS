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


buttons[3].addEventListener("click", () => {
    if(input.valueAsNumber === newArray[3]) {
        newArray[2] = input.valueAsNumber
        newArray[0] = sum
        input.value = "";
        return
    }
    if (isNaN(newArray[2]) === false) {
        let newInput = operate(sum, newArray[2], input.valueAsNumber)
        newArray[2] = newInput;
        return input.value = newArray[2]
    }
    newArray[0] = sum
    newArray[2] = input.valueAsNumber
    input.value = "";
    
})
buttons[8].addEventListener("click", () => {
    if(input.valueAsNumber === newArray[3]) {
        newArray[2] = input.valueAsNumber
        newArray[0] = sub
        input.value = "";
        return
    }
    if (isNaN(newArray[2]) === false) {
        let newInput = operate(sub, newArray[2], input.valueAsNumber)
        newArray[2] = newInput;
        return input.value = newArray[2]
    }
    newArray[0] = sub
    newArray[2] = input.valueAsNumber
    input.value = "";
})
buttons[14].addEventListener("click", () => {
    if (newArray[2] === newArray[3]) {
        newArray[1] = input.valueAsNumber
        let result = operate(newArray[0], input.valueAsNumber, newArray[2])
        newArray[3] = result
        return input.value = result
    }
    if (newArray[1] < newArray[2] || newArray[1] === newArray[2]) {
        let result = operate(newArray[0], newArray[1], input.valueAsNumber)
        newArray[3] = result
        return input.value = result
    }   
    if (newArray[1] > newArray[2]) {
        let result = operate(newArray[0], newArray [2], input.valueAsNumber)
        newArray[3] = result
        return input.value = result
    }
    newArray[1] = input.valueAsNumber
    let result = operate(newArray[0], newArray[1], newArray[2]);
    input.value = result
})



