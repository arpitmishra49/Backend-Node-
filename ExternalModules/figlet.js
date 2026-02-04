import figlet from "figlet";
import chalk from "chalk";

async function doStuff() {
  const text = await figlet.text("Hello , World!!");
  console.log(text);
}
console.log(
    chalk.bgWhite.red(
      figlet.textSync('Hello World!')
    )
  );
doStuff();
