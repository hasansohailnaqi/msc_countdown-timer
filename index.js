import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "input",
    name: "userInput",
    message: "please enter the amount of second",
});
let val = res.userInput;
console.log(val);
