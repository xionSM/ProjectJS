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
let buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", () => {
    
});
buttons[1].addEventListener("click", () => {

});
buttons[2].addEventListener("click", () => {

});
buttons[5].addEventListener("click", () => {
    
});
buttons[6].addEventListener("click", () => {

});
buttons[7].addEventListener("click", () => {

});
buttons[10].addEventListener("click", () => {
    
});
buttons[11].addEventListener("click", () => {
    
});
buttons[12].addEventListener("click", () => {

});
buttons[15].addEventListener("click", () => {
    
});
buttons[4].addEventListener("click", () => {
    
})

buttons[3].addEventListener("click", () => {
    
})

buttons[8].addEventListener("click", () => {
    
})
buttons[9].addEventListener("click", () => {
    
})
buttons[13].addEventListener("click", () => {
   
})
buttons[14].addEventListener("click", () => {
   
    
})



