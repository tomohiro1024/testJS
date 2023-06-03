const express = require('express')
const app = express()

app.get('/', function (req, res) {
    console.log(req)
  res.send('<h1>Hello World!</h1>')
})

app.get('/apple', function (req, res) {
    res.send('APPLE!!!!!!')
  })

app.listen(3000, function() {
    console.log('running!!!')
})