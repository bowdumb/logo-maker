// Use inquirer to create a command-line application
// Take the inputs from inquirer and use them to render the various elements for logo creation.
// Consider if/else or choices for user input to render appropriate elements.
// Render logo elements in a new document titled 'logo.svg'
// Usin
const inquirer = require('inquirer');
const fs = require('fs');
let svgShape = require('./lib/shapes');
const {Square, Circle, Triangle} = require('./lib/shapes');
console.log({Square, Circle, Triangle})

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
]

const 


questionPrompt = () => {
    inquirer.prompt(questions)
    .then((answers) => {
        const questionAnswers =  {
            shape: `${answers.shape}`,
            colorShape: `${answers.colorShape}`,
            text: `${answers.text}`,
            textColor: `${answers.textColor}`

        }
        

        if (answers.text.length > 3) {
            console.log('Please enter no more than three characters for your text input!');
            return;
        } else {
            console.log('We got answers!');
            
           
            console.log(answers);
        }
    writeToFile('logo.svg', questionAnswers);
    })

};
// Generate a new SVG using the user inputs from the inquirer prompts.
function writeToFile(fileName, questionAnswers) {
    let svgShape;
    
    if (questionAnswers.shape === "Circle") {
        svgShape = `<circle cx="50" cy="50" r="40" fill="${questionAnswers.colorShape}"/>`
    
    }else if (questionAnswers.shape === "Triangle") {
        svgShape = `<polygon points="150, 18 244, 182 56, 182" fill="${questionAnswers.colorShape}"/>`
    } else {
        svgShape = `<rect x="10" y="10" width="80" height="80" fill="${questionAnswers.colorShape}"/>`
    };

    const { shape, colorShape, text, textColor } = questionAnswers;
    const svgValues = `
        <svg width="300" height="300">
            <${svgShape} fill="${colorShape}">
                <text x="50" y="50" font-size="20" fill="${textColor}">${text}</text>
            </${shape}>
        </svg>`

      
    ;
    fs.writeFile(fileName, svgValues, (error) => {
        if(error) {
            console.log('Error writing SVG to file.');
        } else {
            console.log('Success!');
        }
    })
}





    //     fs.writeFile('logo.svg', JSON.stringify(questionAnswers), (error) => {
        
//         let shapeType;
//         if(questionAnswers.shape === "Circle") {
//             shapeType = new Circle();
//             return `<circle cx="150" cy="115" r="80" fill="${questionAnswers.colorShape}"/>`
//         }
        
        
        
        
//         if(error) {
//             console.log('Error writing SVG to file.');
//         } else {
//             console.log('Success!');
//         }
//     })
// }


questionPrompt();