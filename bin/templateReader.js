import fs from 'fs';
import path from 'path';

export default class TemplateReader {

    async readExpress(callback) {
        fs.writeFileSync('index.js', 
            `const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

app.listen(process.env.PORT, () => {
    console.log(\`Running on http://localhost:${process.env.PORT}\`);
})
`
        )
        callback([]);
    }
}