// code away!
const express = require('express')

const server = require('./server')

const port = 5000

server.listen(5000, () => console.log(`Chill, Im running on port http://localhost:${port}`))
