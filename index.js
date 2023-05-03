// Use inquirer to create a command-line application
// Take the inputs from inquirer and use them to render the various elements for logo creation.
// Consider if/else or choices for user input to render appropriate elements.
// Render logo elements in a new document titled 'logo.svg'
// Usin
const inquirer = require('inquirer');
const fs = require('fs');
const logo = require('./test.svg');

const questions = [
    {
        type:"checkbox",
        message:"Select a shape for your logo.",
        choices: ["Square", "Circle", "Triangle"],
        name: "shape"
    },
    {
        type:"input",
        message: "Please type a color for the shape of your logo.",
        name: "color"
    },
    {
        type: "input",
        message: "Please type up to three letters for your logo.",
        name: "text"
    },
    {

        type: "input",
        message: "Please type a color for your logo.",
        name: "textColor"

    }
]

questionPrompt = () => {
    inquirer.prompt(questions)
    .then((questionData) => {
        if (questionData.text.length > 3) {
            console.log('Please enter no more than three characters for your text input!');
            return;
        } else {
            console.log('We got answers!');
            
            writeToFile("logo.svg", questionData);
        }
        
    })
};

writeToFile = (filename, data) => {

};
// }

questionPrompt();