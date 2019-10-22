const express = require('express')
const app = express()
const fs = require('fs')
app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], function(e, data){
        let books = JSON.parse(data)
        res.json(books)
    })
})
app.listen(process.argv[2])