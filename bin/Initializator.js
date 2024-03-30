import { exec } from 'child_process';
import { spawn } from 'child_process';
import TemplateReader from './templateReader.js';

export default class Initializator {

    async init(callback) {
        spawn(
            'npm',
            ['init', '-y'],
            { shell: true, stdio: 'inherit' },
        )
        .on('close', () => {
            spawn(
                'npm', 
                ['i', 'dotenv'], 
                { shell: true, stdio: 'inherit' }
            )
            .on('close', () => {
                callback()
            })
        })
        exec('git init');
        exec('echo node_modules > .gitignore');
        exec('echo .env >> .gitignore');
        exec('echo package-lock.json >> .gitignore');
        exec('echo //start coding > index.js');
        exec('echo ENVIRONMENT=development >> .env');
    }

    async initExpress(callback) {
        const templateReader = new TemplateReader('express');

        await templateReader.readExpress((template) => {
            spawn(
                'npm',
                ['init', '-y'],
                { shell: true, stdio: 'inherit' },
            )
            .on('close', () => {
                spawn(
                    'npm', 
                    ['i', 'express', 'dotenv', 'nodemon'], 
                    { shell: true, stdio: 'inherit' }
                )
                .on('close', () => {
                    callback()
                })
            })

            exec('git init');
            exec('echo node_modules > .gitignore');
            exec('echo .env >> .gitignore');
            exec('echo package-lock.json >> .gitignore');
            exec('echo PORT=3000 >> .env');

            template.forEach(line => {
                exec('echo' + line + ' >> index.js');
            })
        })
    }

    async initTypescript(callback) {
        spawn(
            'npm',
            ['init', '-y'],
            { shell: true, stdio: 'inherit' },
        )
        .on('close', () => {
            spawn(
                'npm', 
                ['i', 'typescript', 'dotenv', 'nodemon'], 
                { shell: true, stdio: 'inherit' }
            )
            .on('close', () => {
                spawn(
                    'npx',
                    ['tsc', '--init'],
                    { shell: true, stdio: 'inherit' }
                )
                .on('close', () => {
                    callback()
                })
            })
        })

        exec('git init');
        exec('echo node_modules > .gitignore');
        exec('echo .env >> .gitignore');
        exec('echo package-lock.json >> .gitignore');
        exec('echo ENVIRONMENT=development >> .env');
        exec('echo //start coding > index.ts');
    }
}