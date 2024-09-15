const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 3000;

app.use('/',express.static('public'));



app.get('/budget', (req, res) => {

    fs.readFile('./mybudget.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error occured while reading mybudget.json:', err);
            return res.status(404).send('myBudget file not found');
        }
        const mybudget = JSON.parse(data);
        res.json(mybudget);
    });
});

app.get('/hello', (req,res) => {
    res.send('Hello World! This is Deepak');
});

app.listen(port,()=>{
    console.log(`Server is currently running on port ${port}`);
});