#!/usr/bin/env node

import readline from 'readline';
import Initializator from './Initializator.js';
import chalk from 'chalk';

const init = new Initializator();
const prompts = readline.createInterface(process.stdin, process.stdout);

console.log(chalk.green('Initialization...'))

init.init(() => {
    prompts.close();
    console.log(chalk.green('Done!'));
})