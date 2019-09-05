logger = (req, res, next) => {
    let  timestamp = new Date().toUTCString()
    console.log(`Method: ${req.method} | URL: ${req.url} | Time: ${timestamp}`)
    next()
}

module.exports = logger
