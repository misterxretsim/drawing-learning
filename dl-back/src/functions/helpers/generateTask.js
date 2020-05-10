const tskArr = require('../data/tasks');

module.exports = (lvl) => tskArr.filter(el => el.level===lvl)[String(Date.now()).substr(-1,1)];