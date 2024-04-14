#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generate a random number
//2) user input for guessing number
//3) compared user input with computer generated number and show result
const random_number = Math.floor((Math.random() * 10) + 1);
const answers = await inquirer.prompt([
    {
        "name": "userGuessedNumber",
        "type": "number",
        "message": "please guess a number betwwen 1 - 10",
    },
]);
if (answers.userGuessedNumber == random_number) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
