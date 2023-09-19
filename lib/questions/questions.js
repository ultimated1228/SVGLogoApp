const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Circle', 'Square', 'Triangle'],
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
        name: 'fill',
        message: 'Fill color of the shape (use basic color names or hex):',
        default: 'red',
    },
    {
        type: 'input',
        name: 'strokeWidth',
        message: 'Stroke width (value between 1-5 or if none = 0):',
        default: '2',
        validate: (input) => {
            const number = parseInt(input);
            if (Number.isInteger(number) && number >= 0 && number <= 5) {
                return true;
            } else {
                return 'Please enter a number 0-5 only.';
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
        message: 'Enter the size of the radius for your shape (50-200):',
        validate: (input) => {
            const number = parseInt(input);
            if (Number.isInteger(number) && number >= 50 && number <= 200) {
                return true;
            } else {
                return 'Please enter a number 50-200 only.';
            }
        },
        when: (answers) => answers.shape === 'Circle' || 'Poloygon'
    },
    {
        type: 'input',
        name: 'width',
        message: 'Enter the width of your Square (50-200):',
        validate: (input) => {
            const number = parseInt(input);
            if (Number.isInteger(number) && number >= 50 && number <= 200)  {
                return true;
            } else {
                return 'Please enter a number 50-200 only.';
            }
        },
        when: (answers) => answers.shape === 'Square',
    },

];

module.exports = questions;