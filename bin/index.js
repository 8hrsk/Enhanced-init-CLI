#!/usr/bin/env node

import Initializator from './Initializator.js';

const init = new Initializator();

console.log("\x1b[42m Initializing... \x1b[0m");

init.init(() => {
    console.log("\x1b[42m Done! \x1b[0m");
})