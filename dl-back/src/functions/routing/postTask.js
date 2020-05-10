const generateTask = require('../helpers/generateTask');

module.exports = (rq, rs) => {

    console.log(`Принят запрос POST /api/tsk`);

    const task = JSON.stringify(generateTask(rq.body.level));
    rs.send(task);

    console.log(`Отправляю ответ: ${task}`)
};