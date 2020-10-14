const user = require('express').Router()

user.get('/users', (req, res) => {
    res.send('GET request to the homepage')
})

user.get('/users/:id', (req, res) => {
    res.send('GET request to the homepage')
})

user.post('/users', (req, res) => {
    res.send('POST request to the homepage')
})

user.put('/users/:id', (req, res) => {
    res.send('PUT request to the homepage')
})

user.delete('/users/:id', (req, res) => {
    res.send('DELETE request to the homepage')
})

module.exports=user