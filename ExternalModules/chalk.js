import chalk from 'chalk';

//Chalk is a node.js external module 

console.log(chalk.blue('Hello world!'));
console.log(chalk.red('This is a red message'));
console.log(chalk.green('This is a green message'));
console.log(chalk.yellow('This is a yellow message'));
console.log(chalk.bold('This is bold text'));
console.log(chalk.underline('This is underlined text'));
console.log(chalk.bgMagenta('This text has a magenta background'));
console.log(chalk.blue.bgWhite.bold('Blue text with white background and bold'));
console.log(chalk.rgb(123, 45, 67)('This is a custom RGB color'));
console.log(chalk.hex('#DEADED')('This is a hex color'));
console.log(chalk.bgBlue.white('White background with blue text'));
// You can combine multiple styles'
console.log(chalk.red.bold.underline('Red, bold, and underlined text'));
//bgWhite    underline   rgb  hex  bgMagenta bgBlue bold white
console.log(chalk.green.bgBlack('Green text on black background'));
console.log(chalk.bgWhite.blue.italic('Hello') + ' World' + chalk.red('!'));
console.log(chalk.bgRed.yellow('Error: Something went wrong!'));
//Chalk only works in terminal that support colors

