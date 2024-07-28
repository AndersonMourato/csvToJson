const fs = require('fs');
const csv = require('csvtojson');

csv({
    delimiter: ";",
    checkType: true,
    encoding: 'utf8'
})
.fromFile('./arquivo.csv')
.then((jsonObj)=>{
    fs.writeFile('dados.json', JSON.stringify(jsonObj), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
})

