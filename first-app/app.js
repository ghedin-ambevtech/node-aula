// obtem o path de um objeto no node

const path = require('path');

const pathObj = path.parse(__filename);

console.log(pathObj);