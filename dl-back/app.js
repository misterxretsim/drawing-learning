const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const getTask = require('./src/functions/routing/getTask');
const postTask = require('./src/functions/routing/postTask');
const examine = require('./src/functions/routing/examine');
const app = express();
dotenv.config();
app.use(bodyParser.json());

app.get('/api/tsk', getTask);
app.post('/api/tsk', postTask);
app.post('/api/examine', examine);

app.listen(process.env.PORT, () => console.log(`\nThe app listening on port :${ process.env.PORT }\n`));