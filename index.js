const express = require('express')
const app = express()
const whitelist = require('./whitelist.js')
const cors = require('cors')

var list = whitelist.Whitelist();
app.use(cors());

/*
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist[origin] === true) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
*/

app.get('/', (req, res) => {
  res.send('ADRI FOR LIFE!!  SUP......')
})

app.get('/hello', function (req, res, next) {
  var hello = require('./hello.js');
  hello.Hello(req,res);
})

app.get('/hey', function (req, res){
   res.send('hey man ... adam\'s new house is gonna be cool .. second test.. third test...')
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})


app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})


app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(3000, () => console.log('Server running on port 3000'))

