const express = require('express')

const server = express();

const router = require('./users/userRouter')

// const postsRouter = require("./posts/postRouter")


server.use(logger)
server.use('/user', userRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `You sent the ${req.method} method to ${req.url} at ${new Date()}.`
  );
  next()
};

module.exports = server;
