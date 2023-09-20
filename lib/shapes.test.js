const { Circle, Square, Polygon } = require('./shapes.js');

describe('Circle class', () => {
    it('should correctly set text', () => {
        const circle = new Circle('red', 'black', 2, 'white', 'Test', 100);
        expect(circle.setText()).toContain('<text');
        expect(circle.setText()).toContain('fill="white"');
        expect(circle.setText()).toContain('>Test</text>');
    });

    it('should render a circle SVG', () => {
        const circle = new Circle('red', 'black', 2, 'white', 'Test', 100);
        expect(circle.render()).toContain('<circle');
        expect(circle.render()).toContain('fill="red"');
    });
});

describe('Square class', () => {
    it('should correctly set text', () => {
        const square = new Square('blue', 'yellow', 3, 'black', 'Test', 200);
        expect(square.setText()).toContain('<text');
        expect(square.setText()).toContain('fill="black"');
        expect(square.setText()).toContain('>Test</text>');
    });

    it('should render a square SVG', () => {
        const square = new Square('blue', 'yellow', 3, 'black', 'Test', 200);
        expect(square.render()).toContain('<rect');
        expect(square.render()).toContain('fill="blue"');
    });
});

describe('Polygon class', () => {
    it('should correctly set text', () => {
        const polygon = new Polygon('green', 'purple', 4, 'white', 'Test', 150);
        expect(polygon.setText()).toContain('<text');
        expect(polygon.setText()).toContain('fill="white"');
        expect(polygon.setText()).toContain('>Test</text>');
    });

    it('should render a polygon SVG', () => {
        const polygon = new Polygon('green', 'purple', 4, 'white', 'Test', 150);
        expect(polygon.render()).toContain('<polygon');
        expect(polygon.render()).toContain('fill="green"');
    });
});
