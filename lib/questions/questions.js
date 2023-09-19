const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'fill',
        message: 'Fill color of the shape (use basic color names or hex):',
        default: 'red',
    },
    {
        type: 'input',
        name: 'text',
        message: 'Text (enter 1-3 letter characters):',
        validate: (input) => {
            if (/^[A-Za-z]{1,3}$/.test(input)) {
                return true;
            } else {
                return 'Please enter 1 to 3 letters only.';
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Text color (use basic color names or hex):',
        default: 'black',
    },
    {
        type: 'input',
        name: 'strokeWidth',
        message: 'Stroke width (value between 0-15):',
        default: '10',
        validate: (input) => {
            const number = parseInt(input, 10);
            if (Number.isInteger(number) && number >= 0 && number <= 15) {
                return true;
            } else {
                return 'Please enter a number 0 or 10-20 only.';
            }
        },
    },

    {
        type: 'input',
        name: 'stroke',
        message: 'Stroke color (use basic color names or hex):',
        default: 'black',
    },
    {
        type: 'input',
        name: 'radius',
        message: 'Enter the size of the radius for your shape (150-300):',
        validate: (input) => {
            const number = parseInt(input);
            if (Number.isInteger(number) && number >= 150 && number <= 300) {
                return true;
            } else {
                return 'Please enter a number 150-300 only.';
            }
        },
        when: (answers) => answers.shape === 'Circle'
    },
    {
        type: 'input',
        name: 'width',
        message: 'Enter the width of your Square (150-300):',
        validate: (input) => {
            const number = parseInt(input);
            if (Number.isInteger(number) && number >= 150 && number <= 300) {
                return true;
            } else {
                return 'Please enter a number 150-300 only.';
            }
        },
        when: (answers) => answers.shape === 'Square',
    },

];

module.exports = questions;