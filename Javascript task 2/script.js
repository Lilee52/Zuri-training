let num1 = prompt("Kindly key in any random number", "input-1");
let operator = prompt("Type in your operator", "(add|subtract|multiply|divide)")
let num2 = prompt("Kindly key in any random number", "input-2");

num1 = parseFloat(num1)
num2 = parseFloat(num2)

switch (operator) {
    case "add":
        document.write(num1 + num2)
        result = num1 + num2
        break
    case "subtract":
        document.write(num1 - num2)
        result = num1 - num2
        break
    case "multiply":
        document.write(num1 * num2)
        result = num1 * num2
        break
    case "divide":
        document.write(num1 / num2)
        result = num1 / num2
}

alert(result)