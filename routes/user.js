const express = require('express')
const app = express()

app.get('/users', (req, res) => {
    res.send('GET request to the homepage')
})

app.get('/users/:id', (req, res) => {
    res.send('GET request to the homepage')
})

app.post('/users', (req, res) => {
    res.send('POST request to the homepage')
})

app.put('/users/:id', (req, res) => {
    res.send('PUT request to the homepage')
})

app.delete('/users/:id', (req, res) => {
    res.send('DELETE request to the homepage')
})