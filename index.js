// code away!
const server = require('./server.js')

//Start server listening
const port = process.env.PORT || 3333
server.listen(port, () => {
	console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
})
