// Create class constructor for shapes containing similar properties, 
// then extend the class with other constructors.
class Shapes {
  constructor(colorText, colorShape, text, shape) {
    this.textColor = colorText;
    this.shapeColor = colorShape;
    this.text = text;
    this.shape = shape;

  }

}

class Square extends Shapes {
  render() {
    return `<rect x="10" y="10" width="80" height="80" fill="${this.color}"/>`
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="50" cy="50" r="40" fill="${this.color}"/>`
    
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
  }
};


// shapeSheet = JSON.stringify(questionAnswers) => {`
//   shape: ${answers.shape},
//   colorShape: ${answers.colorShape},
//   text: ${answers.text},
//   textColor: ${answers.textColor}

// `
// }


module.exports = {Square, Circle, Triangle};