// code away!
const server = require('./server.js')

//Start server listening
const port = process.env.PORT || 6969
server.listen(port, () => {
	console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
})
