#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const log = console.log;
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("A Password Generator");
program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// generate password
const generatedPassword = createPassword(length, numbers, symbols);

if (save) {
  savePassword(generatedPassword);
}
// clipboard
clipboardy.writeSync(generatedPassword);

log(chalk.blue("Generated Password: ") + chalk.bold.green(generatedPassword));
log(chalk.yellow("Copied to clipboard"));
