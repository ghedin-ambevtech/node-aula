const fs = require('fs');

// com isso consulta os arquivos da pasta atual.
const files = fs.readdirSync('./');

console.log(files);