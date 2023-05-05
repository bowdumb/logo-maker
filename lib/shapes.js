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
    return `<rect x="75" y="40" width="150" height="150" fill=""/>`
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="150" cy="110" r="90" fill=""/>`
    
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill=""/>`
  }
};


module.exports = {Square, Circle, Triangle};