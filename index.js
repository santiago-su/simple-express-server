const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const categories = []

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/categories', function (req, res, next) {
  categories.push(req.body)
  res.send('Got a POST request')
  res.status(200)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
