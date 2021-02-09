const fs = require('fs');

// com isso consulta os arquivos da pasta atual.
// const files = fs.readdirSync('./');

// console.log(files);

fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log(`Result: ${files}`);
});

