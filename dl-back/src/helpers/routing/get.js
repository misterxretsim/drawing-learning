module.exports = (rq, rs) => {

    console.log(`Принят запрос GET /api/tsk`);
    console.log(`Отправляю ответ: {id: 1, name: "mouse"}`);

    rs.send(JSON.stringify({id: 1, name: "mouse"}))
};