const express = require('express')

const task = express.Router()

task.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

task.get('/:id', (req, res) => {
    res.send('GET request to the homepage')
})

task.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

task.put('/:id', (req, res) => {
    res.send('PUT request to the homepage')
})

task.delete('/:id', (req, res) => {
    res.send('DELETE request to the homepage')
})

module.exports = task