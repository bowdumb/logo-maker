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
// Extended the Shapes class by adding on the Square class in order to include it's properties when exported to the 'index.js' file.
class Square extends Shapes {
  render() {
    return `<rect x="75" y="40" width="150" height="150" fill=""/>`
  }
}
// Extended the Shapes class by adding on the Circle class in order to include it's properties when exported to the 'index.js' file.
class Circle extends Shapes {
  render() {
    return `<circle cx="150" cy="110" r="90" fill=""/>`
    
  }
}
// Extended the Shapes class by adding on the Triangle class in order to include it's properties when exported to the 'index.js' file.
class Triangle extends Shapes {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill=""/>`
  }
};

// This code uses Node.js to export the destructured class objects, making them accessible when imported to the 'index.js' file.
module.exports = {Square, Circle, Triangle};