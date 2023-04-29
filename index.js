// Use inquirer to create a command-line application
// Take the inputs from inquirer and use them to render the various elements for logo creation.
// Consider if/else or choices for user input to render appropriate elements.
// Render logo elements in a new document titled 'logo.svg'
// Usin

const questions = [
    {
        type:"checkbox",
        message:"Select a shape",
        choices: ["Square", "Circle", "Triangle"],
        name: "shape"
    },
    {
        type:"input",
        message: "Please input a color",
        name: "color"
    },
    {
        type: "input",
        message: "Please type up to three letters",
        name: "text"
    }
]

inquirer.prompt(questions)
.then