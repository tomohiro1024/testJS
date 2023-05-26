// import * as fs from 'node:fs/promises';

const fs = require('fs')


fs.writeFileSync('test.txt', 'Hello', function() {
    console.log('OK')
})