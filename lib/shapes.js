
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
        const xEl = `${this.width}` / 2
        const yEl = `${this.height}` / 2
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
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
                <circle cx="250" cy="250" r="${this.radius / 2}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
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
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
                <rect x="${250 - (this.width / 2)}" y="${250 - (this.width / 2)}" width="${this.width}" height="${this.width}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
                ${this.setText()}
            </svg>
        `;
    }
}

class Polygon extends Shapes {
    constructor(fill, stroke, strokeWidth, textColor, text, radius) {
        super(fill, stroke, strokeWidth, textColor, text);
    }

    render() {
        return`
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
                <polygon points="250,60 100,400 400,400"  fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
                <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="${this.textColor}">${this.text}</text>
            </svg>
            `;
    }
}

module.exports = { Shapes, Circle, Polygon, Square };
