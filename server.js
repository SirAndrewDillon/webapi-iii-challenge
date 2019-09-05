const express = require('express')
const server = express()

const postRouter = require('./posts/postRouter.js')
const userRouter = require('./users/userRouter.js')

server.use(express.json())

//Routes
server.use('/api/posts', postRouter)
server.use('/api/users', userRouter)

//Custom Middleware
const middlez = require('./middleware')
server.use(middlez.logger)

server.get('/', (req, res) => {
	res.send(`<h2>I cant get no satisfaction</h2>`)
})

module.exports = server
