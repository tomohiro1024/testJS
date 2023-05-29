// import * as fs from 'node:fs/promises';

const fs = require('fs')

console.log('start')

// fs.writeFileSync('test.txt', 'Hello', function() {
//     console.log('OK')
// })

// fs.readFile('./test.txt', 'utf8', function(err, data){
//    console.log(data)
// })

console.log(process.argv[2])

console.log('end')