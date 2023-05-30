const {read, write} = require('./helper')

console.log('start')

console.log(process.argv[2])

const request = process.argv[2]

if(request === 'read') {
    read()
} else if (request === 'write') {
    write()
} else {
    console.error('error!!!')
}

console.log('end')