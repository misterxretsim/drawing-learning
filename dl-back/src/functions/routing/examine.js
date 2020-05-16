const request = require('request');
const generateTask = require('../helpers/generateTask');

module.exports = (rq, rs) => {

    console.log(`Принят запрос: ${JSON.stringify(rq.body)}`);

    request.post('http://127.0.0.1:5000/api/examine', {form: rq.body}, (er, res, body) => {

        console.log(`Отправляю запрос в dl-py: ${JSON.stringify(rq.body)}`);

        if (er !== null || (res && res.statusCode !== 200)) {
            console.error('Неизвестная ошибка при отправке запроса в dl-py');
            console.error('Error:', er);
            console.log('Status-code:', res && res.statusCode);
            rs.status(418).send('Ошибка в dl-py')
        } else {
            console.log(`Получен ответ от dl-py: ${body}`);
            const pyBody = JSON.parse(body);
            if (pyBody.result) {
                const level = rq.body.level < 5 ? rq.body.level+1 : rq.body.level;
                const task = generateTask(level);
                rs.send(JSON.stringify({
                    result: true,
                    task: task,
                    accuracy: pyBody.accuracy
                }));
                console.log(`Отправляю ответ: ${JSON.stringify({
                    result: true,
                    task: task,
                    accuracy: pyBody.accuracy
                })}`);
            } else {
                rs.send(JSON.stringify({ result: false, accuracy: pyBody.accuracy }));
                console.log(`Отправляю ответ: ${JSON.stringify({
                    result: false,
                    accuracy: pyBody.accuracy
                })}`);
            }
        }
    });
};