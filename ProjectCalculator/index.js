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
let nums = document.querySelectorAll(".num");
let display = document.querySelector("div.display");
let clear = document.querySelector(".clear");
let operators = document.querySelectorAll(".operator");
let backspace = document.querySelector(".backspace");
let decimal = document.querySelector(".decimal");

for (let i = 0; nums.length - 1 > i; i++) {
    console.log(i)
    nums[i].addEventListener("click", () => {
        if (display.textContent === "ERROR") {
                    display.textContent = i + 1;
                    return
                }
                if(display.textContent == newArray[1]){
                    newArray[4] = "";
                    display.textContent = newArray[4]
                    newArray[4] += i + 1
                    display.textContent = newArray[4]
                    return
                }
                if (display.textContent === "0" || display.textContent === 0) {
                    display.textContent =  i + 1;
                    return
                }
                display.textContent += i + 1;
    })
}
nums[9].addEventListener("click", () => {
    if (display.textContent === "ERROR") {
        display.textContent = 0;
        return
    }
    if(display.textContent == newArray[1]){
        newArray[4] = "";
        display.textContent = newArray[4]
        newArray[4] += 0
        display.textContent = newArray[4]
        return
    }
    if (display.textContent === "0" || display.textContent === 0) {
        display.textContent = 0;
        return
    }
    display.textContent += 0;
    
});
clear.addEventListener("click", () => {
    display.textContent = "0";
    newArray = [];
})
let newArray = [];

operators[0].addEventListener("click", () => {
    if (typeof newArray[0] === "function") {
        newArray[2] = Number(display.textContent)
        let result = operate(newArray[0], newArray[1], newArray[2])
        newArray[3] = Number(result.toFixed(2))
        display.textContent = Number(result.toFixed(2))
        newArray[1] = Number(result.toFixed(2))
        newArray[0] = sum
        return
    }
    newArray[0] = sum
    newArray[1] = Number(display.textContent)
})
operators[1].addEventListener("click", () => {
    if (typeof newArray[0] === "function") {
        newArray[2] = Number(display.textContent)
        let result = operate(newArray[0], newArray[1], newArray[2])
        newArray[3] = Number(result.toFixed(2))
        display.textContent = Number(result.toFixed(2))
        newArray[1] = Number(result.toFixed(2))
        newArray[0] = sub
        return
    }
    newArray[0] = sub
    newArray[1] = Number(display.textContent)
})
operators[2].addEventListener("click", () => {
    if (typeof newArray[0] === "function") {
        newArray[2] = Number(display.textContent)
        let result = operate(newArray[0], newArray[1], newArray[2])
        newArray[3] = result
        display.textContent = result
        newArray[1] = result
        newArray[0] = multiply
        return
    }
    newArray[0] = multiply
    newArray[1] = Number(display.textContent)
})
operators[3].addEventListener("click", () => {
    if (newArray[0] === divide && display.textContent == 0 || newArray[1] == 0) {
        newArray = [];
        return display.textContent = "ERROR"
    }
    if (typeof newArray[0] === "undefined" || newArray[0] === undefined) {
        return display.textContent
    }
    newArray[2] = Number(display.textContent)
    if(newArray[0] === divide) {
        let result = operate(newArray[0], newArray[1], newArray[2])
        newArray[3] = result.toFixed(2)
        display.textContent = result.toFixed(2)
        newArray[1] = result.toFixed(2)
        newArray[0] = undefined
        return
    }
    let result = operate(newArray[0], newArray[1], newArray[2])
    newArray[3] = result
    display.textContent = result
    newArray[1] = result
    newArray[0] = undefined
    return
})
operators[4].addEventListener("click", () => {

    if (newArray[0] === divide && display.textContent == 0 || newArray[1] == 0) {
        newArray = [];
        return display.textContent = "ERROR"
    }
    if (typeof newArray[0] === "function") {
        newArray[2] = Number(display.textContent)
        let result = operate(newArray[0], newArray[1], newArray[2])
        newArray[3] = Number(result.toFixed(2))
        display.textContent = Number(result.toFixed(2))
        newArray[1] = Number(result.toFixed(2))
        newArray[0] = divide
        return
    }
    newArray[0] = divide
    newArray[1] = Number(display.textContent)

})
decimal.addEventListener("click", () => {
    if (display.textContent.includes(".")){
        return
    }
    display.textContent += "."
})
backspace.addEventListener("click", () => {
    let displayLength = display.textContent.length;
    let displayValue = display.textContent
    display.textContent = displayValue.substring(0, (displayLength - 1))
    if(displayLength - 1 === 0) {
        display.textContent = 0
    }
})
let buttons = document.querySelectorAll("button");
window.addEventListener("keydown", (e) => {
const key = document.querySelector(`button[data-key="${e.keyCode}"]`)
key.click()
});