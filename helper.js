const fs = require('fs')

const read = function () {
    fs.readFile('./test.txt', 'utf8', function(err, data){
        console.log(data)
     })
}

const write = function () {
    fs.writeFileSync('test.txt', 'Hello!!!', function() {
        console.log('OK')
    })
} 

module.exports = {
    read: read,
    write: write,
}