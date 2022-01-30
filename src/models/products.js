const path = require('path');
const fs = require('fs');

const model = {
    file: path.resolve(__dirname, '../data/products.json'),
    read: () => fs.readFile(model.file),
    all: () => JSON.parse(model.read()),
}

module.exports = model;