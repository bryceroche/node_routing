const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('ADRI FOR LIFE!!  SUP......')
})

app.get('/hello', function (req, res) {
  res.send('Hello World!')
})


app.get('/hey', function (req, res){
   res.send('hey man')
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
