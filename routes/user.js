const user = require('express').Router()

user.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

user.get('/:id', (req, res) => {
    res.send('GET request to the homepage')
})

user.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

user.put('/:id', (req, res) => {
    res.send('PUT request to the homepage')
})

user.delete('/:id', (req, res) => {
    res.send('DELETE request to the homepage')
})

module.exports=user