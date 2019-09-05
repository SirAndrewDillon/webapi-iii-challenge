const express = 'express'
const userRouter = require('./users/userRouter')
const postRouter = require('./posts/postRouter')

const server = express()
server.use(express.json())

//custom middleware

const requireLog = require('./middleware')
server.use(requireLog.logger)

//Routes
server.use('/api/user', userRouter)
server.use('/api/posts', postRouter)

server.get('/', (req, res) => {
	res.send(`<h1>Let's hook up some some middleware human!</h1>`)
})

module.exports = server
