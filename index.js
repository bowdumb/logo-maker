// The variable below implements functionality from the Inquirer.js NPM package.
const inquirer = require('inquirer');
// The variable below implements functionality from the File System module contained within the Node.js NPM package.
const fs = require('fs');
// The variable below enables access to the exported shapes.js file within the /lib directory, enabling access to the classes it contains.
let svgShape = require('./lib/shapes');
// The variable below is destructuring the Square, Circle, and Triangle classes from the shapes.js module, and making them accessible
// within the scope of this index.js file.
const {Square, Circle, Triangle} = require('./lib/shapes');
// The variable below establishes an array containing the four objects that make up the Inquirer.js prompts that deliver the questions
// in order to gather the necessary user responses.
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
        name: "colorShape"
    },
    {
        type: "input",
        message: "Please type up to three letters for your logo.",
        name: "text"
    },
    {

        type: "input",
        message: "Please type a color for your text.",
        name: "textColor"

    }
];
// The questionPrompt function below serves the purpose of initiating the Inquirer.js prompts by passing the 'questions' variable as an argument. 
questionPrompt = () => {
    inquirer.prompt(questions)
    .then((answers) => {
// The questionAnswers variable below is created to store the user's answers to the Inquirer.js prompts. Once the key-value pairs are stored
// this way, they can then be passed to the writeToFile function below.
        const questionAnswers =  {
            shape: `${answers.shape}`,
            colorShape: `${answers.colorShape}`,
            text: `${answers.text}`,
            textColor: `${answers.textColor}`

        }
        
// The if/else statement below validates the user's input for the text they would like to include in their SVG logo. This ensures that
// no more than three characters are generated. If more than three characters are generated, the console log will tell them that they 
// have exceeded the limit and the execution of code will be ended, forcing them to start over. Otherwise, we will get a console log to let
// the user know that their input has been verified.
        if (answers.text.length > 3) {
            console.log('Please enter no more than three characters for your text input! Please start again.');
            return;
        } else {
            console.log('We got answers!');
        }
// The function below calls the writeToFile function, determines the file that will be written within it, and enables scoping to enable access
//  to the questionAnswers values  within the writeToFile function.
    writeToFile('logo.svg', questionAnswers);
    })

};
// Generate a new SVG using the user inputs from the inquirer prompts.
function writeToFile(fileName, questionAnswers) {
// Below we have an if/else-if/else statement that determines the shape of the logo based on the user's selection in the Inquirer.js prompts.
// Values are assigned to the svgShape variable with the corresponding values depending on what shape is selected.
    if (questionAnswers.shape === "Circle") {
        svgShape = `<circle cx="150" cy="110" r="90" fill="${questionAnswers.colorShape}"/>`
    
    }else if (questionAnswers.shape === "Triangle") {
        svgShape = `<polygon points="150, 18 244, 182 56, 182" fill="${questionAnswers.colorShape}"/>`
    } else {
        svgShape = `<rect x="75" y="40" width="150" height="150" fill="${questionAnswers.colorShape}"/>`
    };

    const { shape, colorShape, text, textColor } = questionAnswers;
    // The code below serves to establish some boilerplate values for our SVG logo. This includes the height, width, and text properties.
    // The code is wrapped in backticks so that we can enable the use of template literals in order to integrate the 
    const svgValues = `
        <svg width="300" height="200">
            ${svgShape} fill="${colorShape}"
            <text x="122.5" y="122.5" font-size="30" fill="${textColor}">${text}</text>
            </${shape}>
        </svg>`;
// The code below uses the File System Node.js module to write our SVG image to the disk, and create the final product. The first parameter
// is the fileName to be written to, the second is what will be written (svgValues), and the third is a callback function that runs once the
// file writing code has been executed, to check for errors in that process and display a console.log to the user letting them know whether
// the code was successfully executed or not.
    fs.writeFile('logo.svg', svgValues, (error) => {
        if(error) {
            console.log('Error writing SVG to file.');
        } else {
            console.log("Generated logo.svg");
        }
    })
}
// The code below calls the questionPrompt function and enables it's execution once the user invokes it by running "node index.js" in
// the terminal's command line. This sets the rest of our JavaScript functionality into motion!
questionPrompt();