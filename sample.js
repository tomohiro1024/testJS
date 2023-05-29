// import * as fs from 'node:fs/promises';

const fs = require('fs')

console.log('start')





console.log(process.argv[2])

const request = process.argv[2]

if(request === 'read') {
    fs.readFile('./test.txt', 'utf8', function(err, data){
        console.log(data)
     })
} else if (request === 'write') {
    fs.writeFileSync('test.txt', 'Hello', function() {
        console.log('OK')
    })
} else {
    console.error('error!!!')
}

console.log('end')