module.exports = (rq, rs) => {

    console.log(`Принят запрос GET /api/tsk`);

    const task = JSON.stringify(tskArr[random(tskArr.length)]);
    rs.send(task);

    console.log(`Отправляю ответ: ${task}`)
};

const tskArr = [
    {id: 1, lvl: 1, name: "mouse"},
    {id: 2, lvl: 1, name: "giraffe"},
    {id: 3, lvl: 1, name: "cup"},
    {id: 4, lvl: 1, name: "tree"},
    {id: 5, lvl: 1, name: "flower"}
];

function random (max) {
    return Math.floor(Math.random() * Math.floor(max))
}