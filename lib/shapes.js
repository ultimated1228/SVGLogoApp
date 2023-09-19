
class Shapes {
    fill;
    stroke;
    strokeWidth;
    text;
    textColor;
    constructor(fill, stroke, strokeWidth, textColor, text) {
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.text = text;
        this.textColor = textColor;
    }

    setText() {
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
        fill="${this.textColor}">${this.text}</text>`;
    }

    render() {
        // This should be overridden by each specific shape class
    }
}

class Circle extends Shapes {
    constructor(fill, stroke, strokeWidth, textColor, text, radius) {
        super(fill, stroke, strokeWidth, textColor, text);
        this.radius = radius;
    }
//https://www.w3.org/TR/SVG/
    render() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="${this.radius * 2}" height="${this.radius * 2}">
                <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
                ${this.setText()}
            </svg>
        `;
    }
}

class Square extends Shapes {
    constructor(fill, stroke, strokeWidth, textColor, text, width) {
        super(fill, stroke, strokeWidth, textColor, text);
        this.width = width;
    }

    render() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.width}">
                <rect width="${this.width}" height="${this.width}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
                ${this.setText()}
            </svg>
        `;
    }
}

class Polygon extends Shapes {
    constructor(fill, stroke, strokeWidth, textColor, text, radius) {
        super(fill, stroke, strokeWidth, textColor, text);
        this.radius = radius;
    }

    render() {
        return`
        <svg xmlns="http://www.w3.org/2000/svg" width="${this.radius}" height="${this.radius}">
                <rect width="${this.radius}" height="${this.radius}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
                ${this.setText()}
            </svg>
            `;
    }
}

module.exports = { Shapes, Circle, Polygon, Square };
