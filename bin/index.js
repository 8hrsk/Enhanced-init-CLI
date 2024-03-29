#!/usr/bin/env node

import Initializator from './Initializator.js';

const init = new Initializator();

console.log("\x1b[42m Initializing... \x1b[0m");

const args = process.argv.slice(2)

switch (args[0]) {
    case 'express':
        init.initExpress(() => {
            console.log("\x1b[42m Done! \x1b[0m");
        })
        break;

    default:
        init.init(() => {
            console.log("\x1b[42m Done! \x1b[0m");
        })
        break;
}