const validatePostId = require('./validatePostId')
const validatePost = require('./validatePost')
const validateUserId = require('./validateUserId')
const validateUser = require('./validateUser')
const logger = require('./logger')

const middlez = {
	logger,
	validateUserId,
	validateUser,
	validatePostId,
	validatePost
}

module.exports = middlez
