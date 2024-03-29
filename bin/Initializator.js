import { exec } from 'child_process';
import { spawn } from 'child_process';

export default class Initializator {

    async init(callback) {
        spawn(
            'npm',
            ['init', '-y'],
            { shell: true, stdio: 'inherit' },
        )
        .on('close', () => {
            callback()
        })
        exec('git init');
        exec('echo node_modules > .gitignore');
        exec('echo .env >> .gitignore');
        exec('echo package-lock.json >> .gitignore');
        exec('echo //start coding > index.js');
        exec('echo ENVIRONMENT=development >> .env');
    }
}