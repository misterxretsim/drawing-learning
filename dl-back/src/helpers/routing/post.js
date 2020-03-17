module.exports = (rq, rs) => {

    console.log(`Принят запрос: ${JSON.stringify(rq.body)}`);

    switch (rq.body.method) {
        case 'concat':
            send(rq.body.data.join(''), rs);
            break;
        case 'learn':
            send(learn(rq.body.data), rs);
            break;
        case 'answer':
            send(rq.body.data.join(''), rs);
            break;
        default:
            send('Method is not found ;(', rs);
            break;
    }
};

const learn = (arr) => {
    return arr.reduce( (acc, el) => {
        return acc + el;
    }, 0)
};

const send = (msg, rs) => {
    console.log(`Отправляю ответ: ${JSON.stringify(msg)}`);
    rs.send(JSON.stringify(msg));
};