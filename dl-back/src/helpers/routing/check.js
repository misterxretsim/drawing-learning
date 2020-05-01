module.exports = (rq, rs) => {

    console.log(`Принят запрос: ${JSON.stringify(rq.body)}`);

    console.log(`Отправляю ответ: 'It's a penguin'`);
    rs.send(JSON.stringify("It's a penguin"));
};