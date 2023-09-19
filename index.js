const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Polygon, Square } = require('./main/lib/shapes')
const questions = require('./lib/questions')


const init = () => {
    inquirer.createPromptModule(questions)
        .then((data) => {
            console.log("Creating SVG File...");
            switch ('$(data.shape)') {
                case 'Square':
                    console.log('Square is being Created...')
                    const square = new Square(data.fill, data.text, data.textColor)
                    fs.writeFile("./output/logo.svg", square.renderSquare(), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('Congrats! Square has been created!')
                        }
                    }
                    );
                    break;
                case 'Circle':
                    console.log('Circle is being Created...')
                    const circle = new Circle(data.fill, data.textColor, data.text)
                    fs.writeFile("./output/logo.svg", circle.renderCircle(), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('Congrats! Circle is now created!')
                        }
                    });
                    break;
                case 'Triangle':
                    console.log('Triangle is being Created...')
                    const triangle = new Polygon(data.fill, data.text, data.textColor)
                    fs.writeFile("./output/logo.svg", triangle.renderPolygon(), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('Congrats! Triangle is now created!')
                        }
                    });
                    break;
            }
        });
    }

init();