let number1  =  document.getElementById("number1")
let number2 = document.getElementById("number2")

let multiply =  document.getElementById("multiply")
let divide =  document.getElementById("divide")

let resultParagraph = document.getElementById("result");



const multiplication = () => {
    const num1  =  parseFloat(number1.value)
    const num2  =  parseFloat(number2.value)
    if(isNaN(num1)||isNaN(num2)){
        alert("Please enter valid numbers")
        return ;
    }
    const mult = num1 * num2
    resultParagraph.textContent = `The Result is : ${mult}`;
}

const dividing = () => {
    const num1  =  parseFloat(number1.value)
    const num2  =  parseFloat(number2.value)
    if(isNaN(num1)||isNaN(num2)){
        alert("Please enter valid numbers")
        return ;
    }
    const div = num1 / num2
    resultParagraph.textContent = `The Result is : ${div}`;
}


multiply.addEventListener('click',multiplication)
divide.addEventListener('click',dividing)
