
import inquirer from "inquirer";

const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "please enter the amount of second",
})

function startTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds()+ val);
    const IntervalTime = new Date(intTime);
    setInterval((()=>{}),1000)
}