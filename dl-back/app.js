const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const post = require('./src/helpers/routing/post');
const get = require('./src/helpers/routing/get');
const app = express();
dotenv.config();

app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
    console.log(`\nThe app listening on port :${ process.env.PORT }`);
});

app.get('/api/tsk', get);
app.post('/api', post);
