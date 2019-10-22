const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use (bodyparser.urlencoded({extended: false}))
app.post('/form', function(req, res) {
    // res.render('index', {date: new Date().toDateString()})
    res.end(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2])