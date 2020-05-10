const generateTask = require('../helpers/generateTask');

module.exports = (rq, rs) => {

    console.log(`Принят запрос GET /api/tsk`);

    const task = JSON.stringify(generateTask(1));
    rs.send(task);

    console.log(`Отправляю ответ: ${task}`)
};

