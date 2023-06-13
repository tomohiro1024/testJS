const express = require('express')
const path = require('path')
const app = express()

app.use(express.urlencoded({ extended:false }))

app.use(express.static(path.join(__dirname,'public')))

// app.get('/', function (req, res) {
//     console.log(req)
//   res.send('<h1>Hello World!</h1>')
// })

app.post('/api/v1/quiz', function (req, res) {
  const answer = req.body.answer
  if(answer === '5') {
    res.send('OK')
  } else {
    res.send('NG')
  }
})

app.get('/apple', function (req, res) {
    res.send('APPLE!!!!!!')
  })

app.listen(3000, function() {
    console.log('running!!!')
})