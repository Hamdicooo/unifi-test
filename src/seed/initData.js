const fs = require('fs');

const dataFolder = 'src/seed/data/';

const dirs = fs.readdirSync(dataFolder);

const data = [];

dirs.forEach((val) => data.push(require('./data/' + val)));

module.exports = data;