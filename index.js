const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Beer = require('./beer')

const app = express()

mongoose.connect('mongodb://mongo/db');

app.use(bodyParser.json())

app.post('/beers', (req, res) => {
  console.log('POST /beers');
  new Beer({ name: req.body.name }).save()

  return res.sendStatus(201)
})

app.get('/beers', (req, res) => {
  console.log('GET /beers');
  Beer.find((err, docs) => {
    return res.json(docs)
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
