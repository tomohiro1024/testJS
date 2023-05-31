const fs = require('fs')

const person = {name: 'Tanaka', from: 'Tokyo', sports: 'soccer', }

const read = function () {
    fs.readFile('./test.json', 'utf8', function(err, data){
        const human = JSON.parse(data)
        console.log(human.sports)
     })
}

const write = function () {
    fs.writeFileSync('test.json', JSON.stringify(person), function() {
        console.log('OK')
    })
} 

module.exports = {
    read: read,
    write: write,
}