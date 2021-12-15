require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const myapp = express();
const PORT = process.env.PORT || 5000;

myapp.use(bodyParser.urlencoded({extended: true}));
myapp.use(bodyParser.json());

myapp.get('/', async (req, res) => {
    console.log('home page')
    res.send('Hello World ');
})

myapp.post('/signup', (req, res) => {
    let { email, password } = req.body;
    console.log(email, '==', password, '||');
    res.sendStatus(200);
})

myapp.listen(PORT, () => {
    console.log(`this app is runing at http://localhost:${PORT}`);
});