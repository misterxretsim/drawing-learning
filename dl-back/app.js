const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const post = require('./src/helpers/routing/post');
const get = require('./src/helpers/routing/get');
const check = require('./src/helpers/routing/check');
const app = express();
dotenv.config();

app.use(bodyParser.json());

let start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useFindAndModify: false
        });
        app.listen(process.env.PORT, () => {
            console.log(`\nThe app listening on port :${ process.env.PORT }`);
        });
    } catch (e) {
        console.log(e)
    }
};

start();

app.get('/api/tsk', get);
app.post('/api', post);
app.post('/api/check', check);