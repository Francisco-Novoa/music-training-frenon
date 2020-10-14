const express = require('express')
const app = express()

app.get('/task', (req, res) => {
    res.send('GET request to the homepage')
})

app.get('/task/:id', (req, res) => {
    res.send('GET request to the homepage')
})

app.post('/tasks', (req, res) => {
    res.send('POST request to the homepage')
})

app.put('/tasks/:id', (req, res) => {
    res.send('PUT request to the homepage')
})

app.delete('/tasks/:id', (req, res) => {
    res.send('DELETE request to the homepage')
})