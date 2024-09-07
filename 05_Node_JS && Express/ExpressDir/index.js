const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    console.log("Request received !!!!")
    res.send('<h1>Welcome to Root page</h1>')
})

app.get('/', (req, res)=> {
    console.log("Request received !!!!")
    res.send('Hello World')
})

app.get('/product', (req, res)=> {
    console.log("Request received !!!!")
    res.send('product Page')
})

app.get('/contact', (req, res)=> {
    console.log("Request received !!!!")
    res.send("Welcome Contact Page")
})


app.get('/search', (req, res)=> {
    console.log(req.query )
    console.log("Request received !!!!")
    res.send("Sucess Search")
})

app.get('/:username', (req, res)=> {
    console.log(req.params)
    console.log("Request received !!!!")
    res.send("Welcome Contact Page")
})



app.listen(3000)