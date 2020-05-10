const generateTask = require('../helpers/generateTask');

module.exports = (rq, rs) => {

    console.log(`Принят запрос: ${JSON.stringify(rq.body)}`);

    if (randomNum() > 4) {
        const level = rq.body.level < 5 ? rq.body.level+1 : rq.body.level;
        const task = generateTask(level);
        rs.send(JSON.stringify({
            result: true,
            task: task
        }));
        console.log(`Отправляю ответ: ${JSON.stringify({
            result: true,
            task: task
        })}`);
    } else {
        rs.send(JSON.stringify({ result: false }));
        console.log(`Отправляю ответ: ${JSON.stringify({
            result: false
        })}`);
    }
};

const randomNum = () => String(Date.now()).substr(-1,1);